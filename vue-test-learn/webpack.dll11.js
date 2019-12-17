const Webpack = require('webpack')
module.exports = {

  entry: {
    vendor: ['jquery', 'loadsh']
  },
  output: {
    path: __dirname + '/dll',
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new Webpack.DllPlugin({
      path: __dirname + '/dll/[name]-manifest.json',
      name: '[name]_library'
    })
  ]
}