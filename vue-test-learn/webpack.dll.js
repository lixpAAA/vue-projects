const webpack = require('webpack')
module.exports = {
  entry: {
    vendor: ['loadsh']
  },
  output: {
    path: __dirname + '/dll',
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: __dirname + '/dll/[name]-manifest.json',
      name: '[name]_library'
    })
  ]
}