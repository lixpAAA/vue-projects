(function (global) {

  function Vue(options) {
    if (!(this instanceof Vue)
    ) {
      console.error('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }


})(this)