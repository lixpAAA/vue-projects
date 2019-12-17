const Vue = require('vue')
const app = new Vue({
  template: '<div>Hello world<span>{{name}}</span></div>',
  data: {
    name: 'lixp'
  }
})

const renderer = require('vue-server-renderer').createRenderer()
renderer.renderToString(app).then(html => {
  console.log('html:', html)
})
