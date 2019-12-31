import axios from "axios";

const baseURL_1 = "" // 针对不同的服务器请求地址，创建不同的axios实例
// const baseURL_1 = "" // 不给地址让其走mock

export function request(config) {
    const instance = axios.create({
        // baseURL: baseURL_1,
        timeout: 5000
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        return Promise.reject(err)
    })
    //  响应拦截
    instance.interceptors.response.use(res => {
        console.log(res.headers.etag)
        return res
    }, err => {
        return Promise.reject(err)
    })

    // console.log('instance:', instance)
    return instance(config)
}

