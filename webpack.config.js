const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/restaurant.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
        devtool: "eval-source-map",
        devServer: {
            watchFiles: ["./src/resta.html"],
    },
     plugins: [
        new HtmlWebpackPlugin({
        template: "./src/resta.html",
    }),
    ],
    module : {
        rules :[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};