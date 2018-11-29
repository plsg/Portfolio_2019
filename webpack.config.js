const HtmlWebpackPlugin = require("html-webpack-plugin");
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    plugins: [
        new FaviconsWebpackPlugin('./src/ma-main.jpg'),
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: './src/index.html',
        }),
    ],
};