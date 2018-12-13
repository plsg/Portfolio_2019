const HtmlWebpackPlugin = require("html-webpack-plugin");
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: false
                    }
                }]
            },
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin('./src/ma-main.jpg'),
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: './src/index.html',
        }),
    ],
};

