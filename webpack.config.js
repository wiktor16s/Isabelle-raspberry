const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const extractSass = new ExtractTextPlugin({
    filename: "styles.css"
});

const frontend = {
    entry: {
        main: './src/client/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {}
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        extractSass
    ]
};

const backend = {
    entry: {
        main: './src/server/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {}
                }
            }
        ]
    },
    target: 'node',
    externals: [nodeExternals()]
};

module.exports = [
    frontend,
    backend
];