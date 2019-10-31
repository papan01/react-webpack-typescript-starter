const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_DIR = path.resolve(__dirname);
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const SRC_DIR = resolvePath('src');
const DIST_DIR = resolvePath('dist');

module.exports = ({ mode }) => {
  const isDev = mode === 'development';
  return {
    mode,
    entry: {
      client: resolvePath(SRC_DIR, 'entry/client.tsx'),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '🐠🦍🐙',
        filename: 'index.html',
        template: resolvePath(SRC_DIR, 'templates/index.html'),
        meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        minify: {
          removeComments: true,
          collapseWhitespace: false,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    output: {
      filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
      chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
      path: DIST_DIR,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpeg|jpg|gif|webp)$/,
          use: ['file-loader?name=assets/images/[name].[ext]'],
        },
        {
          test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
          use: ['file-loader?name=assets/fonts/[name].[ext]'],
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /(node_modules|bower_components)/,
          include: [SRC_DIR],
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          }, {
            loader: 'eslint-loader',
          },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devtool: isDev ? 'cheap-module-inline-source-map' : 'source-map',
  };
};
