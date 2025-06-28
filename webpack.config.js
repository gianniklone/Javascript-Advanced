const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader',
        ],
      },
       {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html',
      favicon: './src/favicon/favicon.png' 
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
  mode: 'development',
};
