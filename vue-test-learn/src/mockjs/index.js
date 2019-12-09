import mock from 'mockjs';
import url from './home/url'
import homef from './home/index'

mock.mock(url.url.imgInifys, 'get', homef.getMoreImgs)