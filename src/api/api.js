import RequestApi from "../utils/RequestApi";
import GLOBAL_VAR from "../globalConfig/globalVariable";

const options = {
    baseURL: GLOBAL_VAR.baseURL,
};
const service = new RequestApi(options).service;

/*
 * @desc 新建服务
 * @param
 * @method ： post
 */
export const addNewLayer = (ajaxParams) => {
    return service({
        url: "/brace/addNewLayer",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}

/*
 * @desc 服务列表获取
 * @param
 * @method ： post
 */
export const findAll = (ajaxParams) => {
    return service({
        url: "/brace/findAll",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}

/*
 * @desc 服务详情
 * @param
 * @method ： post
 */
export const findByServiceName = (ajaxParams) => {
    return service({
        url: "/brace/findByServiceName",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 矢量图层
 * @param
 * @method ： post
 */
export const saveJsonMap = (ajaxParams) => {
    return service({
        url: "/brace/saveJsonMap",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 定量图层
 * @param
 * @method ： post
 */
export const saveQuantitative = (ajaxParams) => {
    return service({
        url: "/brace/saveQuantitative",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 分类图层
 * @param
 * @method ： post
 */
export const saveClassify = (ajaxParams) => {
    return service({
        url: "/brace/saveClassify",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        // params: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 编辑服务
 * @param
 * @method ： post
 */
export const changeLayer = (ajaxParams) => {
    return service({
        url: "/brace/changeLayer",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 删除矢量图层
 * @param
 * @method ： post
 */
export const deleteJsonMap = (ajaxParams) => {
    return service({
        url: "/brace/deleteJsonMap",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 删除定量图层
 * @param
 * @method ： post
 */
export const deleteQuantitative = (ajaxParams) => {
    return service({
        url: "/brace/deleteQuantitative",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 删除分类图层
 * @param
 * @method ： post
 */
export const deleteClassify = (ajaxParams) => {
    return service({
        url: "/brace/deleteClassify",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}
/*
 * @desc 删除服务
 * @param
 * @method ： post
 */
export const deleteLayer = (ajaxParams) => {
    return service({
        url: "/brace/deleteLayer",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: ajaxParams,
        loading: true,
        noToken: false,
    })
}