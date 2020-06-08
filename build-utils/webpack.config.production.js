const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = () => ({
  mode: 'production',
  output: {
    filename: 'js/[name].[contentHash].js',
    chunkFilename: 'js/[name].[contentHash].js',
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 80 * 1024,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        common: {
          test: /[\\/]common[\\/]/,
          priority: 0,
          minSize: 20 * 1024,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash].css',
    }),
  ],
  performance: {
    hints: 'warning',
    // @TODO : to work on this to decrease size
    maxEntrypointSize: 120 * 1024,
    assetFilter(assetFilename) {
      return (assetFilename.endsWith('.js') || assetFilename.endsWith('.css')) && assetFilename.indexOf('vendors') === -1;
    },
  },
});
