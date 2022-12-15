import axios from "axios";
import { Message } from "element-ui";

//引用全局变量文件
import GLOBAL_FUN from "../globalConfig/globalFunction";
import router from "@/router";
export default class RequestApi {
    constructor(options) {
        this._baseURL = options.baseURL;
        this._service = null;
        this.initApi(options);
    }
    get service() {
        return this._service;
    }
    initApi(options) {
        /****** 创建axios实例 ******/
        this._service = axios.create({
            baseURL: this._baseURL, // api的base_url
            timeout: 300000, // 请求超时时间300秒
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Credentials": "true",
            },
            withCredentials: true, //启用session,每次请求带sessionid
        });
        /****** request拦截器==>对请求参数做处理 ******/
        this._service.interceptors.request.use(
            config => {
                if (config.loading === false) {
                    GLOBAL_FUN.endLoading();
                } else {
                    GLOBAL_FUN.startLoading();
                }
                if (!config.noToken) {
                    // 添加登录自定义token到header中
                    let token = GLOBAL_FUN.getToken() || null;
                    config.headers["x-auth-token"] = token;
                }
                let userId = GLOBAL_FUN.getUserId() || null;
                config.headers["userId"] = userId;
                return config;
            },
            error => {
                //请求错误处理
                GLOBAL_FUN.endLoading();
                Promise.reject(error);
            }
        );
        /****** 响应拦截==>对响应做处理 ******/
        this._service.interceptors.response.use(
            response => {
                let MSG = "操作失败";
                //成功请求到数据
                GLOBAL_FUN.endLoading(); //关闭加载中的样式
                //这里根据后端提供的数据进行对应的处理
                const {
                    code,
                    msg
                } = response.data;
                MSG = msg
                if (code == 1) {
                    //成功 李丁接口
                } else if (code == 200) {
                    //成功 万九龙接口
                } else if (code == 332) {
                    // token失效，跳转到登录页面
                    let val = localStorage.getItem('token');
                    if (val) {
                        Message.error({
                            showClose: true,
                            message: MSG,
                            duration: 2000
                        });
                    }
                    localStorage.removeItem("loginData");
                    localStorage.removeItem("role");
                    localStorage.removeItem("token");
                    router.push({
                        path: '/'
                    });
                } else {
                    Message.error({
                        showClose: true,
                        message: MSG || '请求失败',
                        duration: 5000
                    });
                }
                return response.data;
            },
            error => {
                console.log(error)
                //响应错误处理
                GLOBAL_FUN.endLoading();
                GLOBAL_FUN.errorMsg('服务器出错了')
                return Promise.reject(error);
            }
        );
    }
}