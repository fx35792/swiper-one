
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'assets',
  publicPath: './',
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: 8001,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@utils', resolve('src/utils'))
  }
}