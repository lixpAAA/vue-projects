const path = require('path')

const UglifyWebpackPugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.resolve(__dirname, dir)
}


// module.exports = {
//   publicPath: './',
//   outputDir: 'dist',
//   lintOnSave: true,
//   devServer: {
//     compress: true,
//     open: false,
//     proxy: {
//       '/api': {
//         target: 'http:xxx.xx',
//         ws: true,
//         changeOrigin: true,
//         pathRewrite: {
//           '/api': '/'
//         }
//       }
//     },

//     css: {
//       extract: true,
//       sourceMap: false,
//       loaderOptions: {
//         sass: {
//           data: `@import "@/assets/common/index.scss"`
//         }
//       },
//       modules: false
//     },
//     chainWebpack: config => {
//       config.resolve.alias
//         .set("@", resolve("src"))
//         .set("components", resolve('@/components'))
//       if (isProduction) {
//         config.plugin.delete('preload')
//         config.optimization.minimize(true)
//         config.optimization.splitChunks({
//           chunks: 'all'
//         })
//       }
//     },
//     configureWebpack: config => {
//       if (isProduction) {
//         config.plugins.push(
//           new UglifyWebpackPugin({
//             compress: {
//               drop_debugger: true,
//               drop_console: true
//             },
//             sourceMap: false,
//             parallel: true
//           })
//         )
//       } else {
//       }
//     },
//     productionSourceMap: false,
//     parallel: require('os').cpus().length > 1
//   }
// }