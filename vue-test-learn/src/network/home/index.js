import url from './urlconfig'
import { request } from '../../request/request'
import axios from 'axios'

export default {
    getMoreImg() {
        return request({
            url: url.moreImg
        })
    },
    test() {
        return request({
            url: '/AAA/post1',
            method: 'post',
            headers: {
                contentType: 'application/json'
            },
            data: JSON.stringify({ data: 123 }),
            params: { aa: 122 }
        })
    },
    testGet() {
        return axios.get('/AAA/get')
    },
    testUploadFile(data) {
        return request({
            url: url.uploadFile,
            method: 'post',
            data: data,
            headers: {
                contentType: 'application/x-www-form-urlencoded'
            }
        })
    },
    testDownloadFile(path) {
        return request({
            url: url.downloadFile,
            method: 'get',
            params: {
                path
            },
            responseType: 'text'
        })

    }
}