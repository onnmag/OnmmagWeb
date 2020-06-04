module.exports = () => ({
  devServer: {
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
    host: '0.0.0.0',
  },
  output: {
    publicPath: '/',
  },
  devtool: 'source-map',
});
