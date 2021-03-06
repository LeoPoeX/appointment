module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://visitor.fookwood.com',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'dialog-message-font-size': '16px',
          'tab-active-text-color': '#2090E6',
          'tabs-bottom-bar-color': '#2090E6'
        }
      }
    }
  }
};
