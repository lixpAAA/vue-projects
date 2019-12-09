import url from './urlconfig'
// import { request } from '../../request/request'
import axios from 'axios'

export default {
    // getMoreImg() {
    //     return request({
    //         url: url.moreImg
    //     })
    // },
    // test() {
    //     return request({
    //         url: '/post',
    //         method: 'post',
    //         headers: {
    //             contentType: 'UTF-8'
    //         }
    //     })
    // },
    testGet() {
        return axios.get('/AAA/get')
    }
}