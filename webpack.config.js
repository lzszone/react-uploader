const path = require('path');

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  mode: 'production',
  target: 'node'
}