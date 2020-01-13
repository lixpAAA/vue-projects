import Vue from 'vue'

Vue.directive('btn-click', {
  bind: function (el, bind) {
    // console.log('el:', el.parentNode.removeChild(el))
    el.addEventListener('click', function () {
      el.disabled = true
      bind.value().then(res => {
        console.log(res)
        el.disabled = false
      }).catch(err => {
        // debugger
        el.disabled = false
        console.error(err)
      })
    })
  },
  unbind: function (el) {
    el.removeEventListener('click')
  }
})