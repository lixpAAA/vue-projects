import url from './urlconfig'
import {request} from '../../request/request'

export default {
    getMoreImg () {
       return request({
           url: url.moreImg
       })
    }
}