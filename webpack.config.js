const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


let mode = "development"
// Hack required because HMR doesn't watch css (webpack-5) because of browerslist
let target = "web"


if(process.env.NODE_ENV === "production") {
    mode = "production"
    target = "browserslist"
}

module.exports = {
    entry: ['./src/App.jsx'],
    mode,
    target,
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
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

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/templates/react/index.ejs"
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },


    devtool: "source-map", //enable source-map dev-tools
    devServer: {
        historyApiFallback: true,
        contentBase: "./dist", // to render index.html directly instead of folder structure
        hot: true, // enable hot-reloading instead of live reloading
    }
}
