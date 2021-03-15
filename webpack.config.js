const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
    rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                minimize: true,
            }
        },
        {
            test: /\.(png|jpe?g|gif|svg|mp4)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path]/[name].[hash].[ext]',
                        outputPath: './src/SamplePhotos/',
                        context: "src"
                    },
                },
            ],
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ],
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/SamplePhotos", to: "SamplePhotos" },
                { from: "src/logo.png", to: "logo.png" },
            ],
        })
    ],
}