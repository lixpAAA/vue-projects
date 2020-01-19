const path = require('path')
const UglifyWebpackPugin = require('uglifyjs-webpack-plugin')


const isProduction = process.env.NODE_ENV === 'production'

function pathResolve(dir) {
  return path.resolve(__dirname, dir)
}


module.exports = {
  //  publicpath 相当于vue-cli2的baseUrl
  publicPath: isProduction
    ? 'C:/Users/Administrator/Desktop/project/vue-projects-master/vue-projects-master/mycomponents/dist'    // 线上环境地址
    : '/',
  outputDir: 'dist',
  lintOnSave: !isProduction,  // 保存的时候开启lint检查
  runtimeCompiler: false, // vue实例可以使用<template> 选项
  productionSourceMap: false, // 可以加速打包
  devServer: {
    compress: true,
    open: false,
    port: 8081,
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
    }
  },
  css: {
    extract: true,
    // 错误追踪  生产环境可以关掉， 会增加代码打包时间
    sourceMap: false,
    //css预处理配置
    loaderOptions: {
      // less: {
      //   data: `@import "@/assets/common/index.scss"`
      // }
    },
    // 是否启用css
    modules: true
  },
  chainWebpack: config => {
    // config.resolve.alias.set('@', pathResolve('./src'))
    //   .set('@components', pathResolve('@/components'))
    console.log(config.resolve.extensions.values())
    if (isProduction) {
      //  生产环境删除预加载
      config.plugins.delete('preload')
      //  开启压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new UglifyWebpackPugin({
          /// 删除console debugger
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          //  使用多进程并行来提高构建速度
          parallel: true
        })
      )
    } else {
      //  测试环境
    }
  },
  //  生产环境
  productionSourceMap: false,
  // 默认并发数('os').cpus().length -1
  parallel: require('os').cpus().length > 1
}