// 专门放置 全局函数
import {Loading, Message} from "element-ui";
import Vue from "vue";
//let 声明变量
const err_msg = "操作失败";
const success_msg = "操作成功";
let loading;

/**
 * 加载中的样式
 */
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: 'Loading...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.3)'
    });
}

/**
 * 关闭加载中的样式
 */
function endLoading() {
    if (loading) {
        loading.close();
    }
}

/**
 * 成功消息
 * @param {Object} msg        内容
 * @param {Object} duration 时长
 */
function successMsg(msg, duration) {
    msg = msg ? msg : success_msg;
    Message({
        message: msg,
        showClose: true,
        type: "success",
    });
}

/**
 * 失败消息
 * @param {Object} msg        内容
 * @param {Object} duration 时长
 */
function errorMsg(msg, duration) {
    msg = msg ? msg : err_msg;
    Message({
        message: msg,
        showClose: true,
        type: "error",
    });
}

/**
 * 打开新的窗口
 * @param {Object} _this
 * @param {Object} path
 * @param {Object} tabTitle
 * @param {Object} query
 */
function openNewTab(_this, path, tabTitle, query) {
    //调用父类的方法，打开新的窗口
    _this.$root.$children[0].$children[0].addTab(path, tabTitle, query);
}

/**
 * 获取Tab的对象与传参
 * @param {Object} _this
 * @param {Object} tabTitle
 */
function getOpenTab(_this, tabTitle) {
    //调用父类的方法，获取指定打开的窗口
    return _this.$root.$children[0].$children[0].getTab(tabTitle);
}

/**
 * 将信息存储到本地localStorage中
 * @param {Object} key
 * @param {Object} value
 */

function setLocalStorage(key, value) {
    if (!window.localStorage) {
        Message({
            message: "浏览器不支持localstorage",
            type: "warning",
        });
        return false;
    } else {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

/**
 * 获取存储到本地localStorage中key对应的值
 * @param {Object} key
 */
function getLocalStorage(key) {
    let tmpVal = window.localStorage.getItem(key);
    try {
        if (tmpVal) {
            return JSON.parse(tmpVal);
        }
    } catch (err) {
    }

}

/**
 * 删除存储到本地localStorage中key对应的值
 * @param {Object} key
 */
function removeLocalStorage(key) {
    return window.localStorage.removeItem(key);
}

/**
 * 存储登录token
 * @param {Object} token
 */
function setToken(token) {
    setLocalStorage("token", token);
}

/**
 * 获取token
 */
function getToken() {
    return getLocalStorage("token");
}

/**
 * 获取userId
 */
function getUserId() {
    if (getLocalStorage("loginData") && getLocalStorage("loginData").uid) {
        return getLocalStorage("loginData").uid;
    }
}
const S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
function guid(){
    return (S4() + S4() +S4() +S4() +S4() +S4() +S4() +S4())
}

//导出全局变量
export default {
    errorMsg,
    startLoading,
    endLoading,
    getToken,
    getUserId,
    getLocalStorage,
    setLocalStorage,
    guid

};
