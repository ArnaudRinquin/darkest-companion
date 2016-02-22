var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: process.env.NODE_ENV !== 'production' ? ['react-hot', 'babel'] : ['babel'],
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    noInfo: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env || 'dev')
      }
    })
  ]
};

if (process.env.NODE_ENV !== 'production') {
  module.exports.entry.push('webpack-dev-server/client?http://0.0.0.0:8080');
  module.exports.entry.push('webpack/hot/only-dev-server');
}
