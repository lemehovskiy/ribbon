const path = require('path');
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    watch: true,
    mode: NODE_ENV,
    entry: './src/ribbon.es6',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './ribbon.js',
        libraryTarget: "umd"
    },

    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "stage-3", "react"]
                    }
                }
            }
        ]
    }
};