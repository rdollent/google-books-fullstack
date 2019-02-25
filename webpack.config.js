// const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: [
        './app/app.jsx'
    ],
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            'node_modules',
            'components',
            'reducers',
            'store',
            'actions'
        ],
        alias: {

        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
                
              }
            }
          }
        ]
    }




}