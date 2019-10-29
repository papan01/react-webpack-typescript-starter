const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const ROOT_DIR = path.resolve(__dirname);
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const SRC_DIR = resolvePath('src');
const DIST_DIR = resolvePath('dist');

module.exports = ({ mode }) => {
    return {
        mode : mode,
        entry: {
           'client': resolvePath(SRC_DIR,'js/index.js')
        },
        plugins:[ 
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: '',
                filename: 'index.html',
                template: resolvePath(SRC_DIR,'templates/index.html'),
                meta: {'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no'},
                minify: { 
                  removeComments: true, 
                  collapseWhitespace: false 
                }
            }),
        ],
        output: {
            filename: '[name].bundle.js',
            path: DIST_DIR,
            publicPath:'/'
        }
    }
};