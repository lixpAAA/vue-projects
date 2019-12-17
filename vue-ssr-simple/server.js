const express = require('express')
const Vue = require('vue')
const fs = require('fs')

const express = require('express')
const server = express()

function createApp(url) {
  if (url === '/') {
    url = 'index'
  }
  return new Vue({
    template: fs.readFileSync('template' + url + '.html')
  })

}

const renderer = require('vue-server-renderer').createRenderer()



server.get('*', (req, reqs) => {
  const app = createApp(req.url)
  renderer.renderToString(app).then(html => {
    console.log('html:', html)
    reqs.end(html)
  })
})
server.listen(8081)
