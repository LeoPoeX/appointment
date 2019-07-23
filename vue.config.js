// vue.config.js
module.exports = {
  // 修改的配置
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://visitor.fookwood.com',
        changeOrigin: true
      }
    }
  }
}
