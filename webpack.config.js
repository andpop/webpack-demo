const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            // Правило для инлайнового добавления стилей
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}

module.exports = conf;
