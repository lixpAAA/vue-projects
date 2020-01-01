(function (window) {
	var _ = function () { }
	debugger
	if (window._) {  // 变量_ 已存在的话，给window上扩展一个可以修改underscore 名称的方法
		debugger
		window.setUnderScoreName = function (name) {
			window[name] = _
		}
	}
	_.noConfict = function () {

	}

	window._ = _

})(this)