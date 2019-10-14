const path = require('path')

const UglifyWebpackPugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.resolve(__dirname, dir)
}


module.exports = {
  // 基本路径
  publicPath: './', //相当于2的baseUrl,
  //  打包后的输出目录
  outputDir: 'dist',
  //  在保存的时候开启lint检查
  lintOnSave: true,
  devServer: {
     //  是否压缩
    compress: true,
    // 是自动打开浏览器
    open: false,
    //  解决跨域请求 
    proxy: {
      '/api': {
          target: 'http:xxx.xx',
          ws: true, // 开启websocket
          changeOrigin: ture, // 
          pathRewrite: { // 替换api
            '/api': '/'
          }
      }
    },
    /// css预处理
    css: {
        // css分离插件
        extract: true,
        // 错误追踪  生产环境可以关掉， 会增加代码打包时间
        sourceMap: false ,

        //css预处理配置
        loaderOptions: {
          sass: {
            data: `@import "@/assets/common/index.scss"`
          }
        },
        // 是否启用css
        modules: false
    },
    // webpack配置
    chainWebpack: config => {
      config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve('@/components'))
      if(isProduction) {
        //  生产环境删除预加载
        config.plugin.delete('preload')
        //  开启压缩代码
        config.optimization.minimize(true)
        // 分割代码
        config.optimization.splitChunks({
          chunks: 'all'
        })
        // cdn

      }
      // 测试环境
    },
    configureWebpack: config => {
      if(isProduction) {
        config.plugins.push(
          new UglifyWebpackPugin({
            /// 删除console debugger
            compress: {
              drop_debugger: true,
              drop_console: true
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
}