/* eslint-disable */

const webpack = require('webpack');

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackMerge = require('webpack-merge');

const getEnvironmentSpecificConfig= (env) => require(`./build-utils/webpack.config.${env}`)(env);

const presetConfig = require("./build-utils/loadPresets");

/**
 * All the build files will be stored in this directory
 */
const BUILD_DIR = path.join(__dirname, 'src/dist/');

module.exports = ({ mode, presets} = { mode: "production", presets: []})=> {
  return webpackMerge({
    watchOptions: {
      poll: true,
    },
    /**
     * If you do not add these webpack will not recognize the file
     * and it will say file or module not found.
     */
    entry: {
      start: './src/App.jsx',
      react: ['react', 'react-dom'],
    },
    resolve: {
      alias: {
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@modules': path.resolve(__dirname, 'src/components/modules'),
        '@pages': path.resolve(__dirname, 'src/components/pages'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
      extensions: ['.js', '.jsx'],
    },


    output: {
      path: BUILD_DIR,
      filename: '[name]-[hash].min.js',
    },

    /**
     * ## Modules section ##
     * Here we define the loaders and other things
     * required by webpack to understand how to deal
     * with various files.
     */
    module: {
      rules: [
        {
          loader: 'babel-loader',
          exclude: /node_modules/,
          test: /\.jsx?$/,
        },
        {
          loader: 'eslint-loader',
          test: /\.jsx?$/,
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoader: 2,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader',
          options: {
            esModule: false,
          }
        },
      ],
    },
    /**
     * Plugins for webpack
     */
    plugins: [
      new CleanWebpackPlugin([BUILD_DIR], {
        verbose: true,
        exclude: ['json'],
      }),
      new webpack.optimize.SplitChunksPlugin({
        name: ['react'],
        filename: '[name]-[hash].bundle.js',
      }),
      new HtmlWebpackPlugin({
        title: 'Onnmag',
        filename: 'index.html',
        inject: true,
        hash: true,
        xhtml: true,
        template: 'src/templates/react/index.ejs',
      }),
      new MiniCssExtractPlugin({
        filename: 'styles-[name]-[hash].css',
        chunkFilename: 'styles-[name]-[hash].css',
      }),
    ],
  },
    getEnvironmentSpecificConfig(mode),
    presetConfig({mode, presets}),
  )
};

