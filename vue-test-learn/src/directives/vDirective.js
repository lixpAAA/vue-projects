import Vue from 'vue'

Vue.directive('btn-click', {
  inserted: function (el, bind) {
    el.addEventListener('click', function () {
      el.disabled = true
      bind.value().then(res => {
        console.log(res)
        el.disabled = false
      })
    })
  }

})