const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEV = NODE_ENV === 'development';

const setupDevtool = () => IS_DEV ? 'eval' : false;

module.exports = {
    mode: NODE_ENV,
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/',
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.sass$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        },
                    }
                },
                    'sass-loader',
                ]
            }
        ],
    },
    devtool: setupDevtool(),
    plugins: IS_DEV ? [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin()
    ] : [],
};
