const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 5000,
    https: false,
    hotOnly: false,
    proxy: {

      "/search": {
        target: "http://123.60.52.244/search",
        changeOrigin: true, //改变源
        pathRewrite: {
          "^/search": "",
        }
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      }
    },
  },
  //定义全局颜色变量的
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/variables.scss';`
      }
    }
  },
  productionSourceMap:false//打包就可以看到项目文件中已经没有map文件 ,解决首次加载慢问题
};
