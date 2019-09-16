const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'babel-polyfill',
        path.join(__dirname, 'src', 'index.js'),
    ],
    output: {
        filename: 'build.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        }, {
            test: /\.styl$/,
            exclude: /node_modules/,
            use: ['style-loader', {
                loader: 'css-loader',
            },'stylus-loader']
        }]
    },
    plugins: [
        new HtmlPlugin({
            title: 'My first React.js application',
            template: path.join(__dirname, 'src', 'index.ejs'),
            hash: true,
        })
    ]
}
