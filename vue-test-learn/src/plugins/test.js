export default {
    install: (vue) => { // vue为vue.use调用时回调
        vue.prototype.test = function () {
            console.log('全局方法')
        }
    }
}