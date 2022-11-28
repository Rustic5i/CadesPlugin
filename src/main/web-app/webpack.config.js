const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        app:['./src/js/index.js']
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['app', 'vendor']
        }),
        new CopyWebpackPlugin([
            {from: './src/js/scripts', to: 'resource/scripts'}
        ])
    ]
}