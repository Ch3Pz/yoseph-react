const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  // entry: './src/app.js',
  // mode: 'production',
  entry: ["babel-polyfill",'./src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: [
        'babel-loader',
        'strip-whitespace-loader'
      ],
      test: /\.js$/,
      exclude: /node_modules/
    }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
  externals: {
    jquery: 'jQuery'
  }
};
