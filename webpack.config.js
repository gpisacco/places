var path = require('path');

module.exports = {
  mode: 'development',
  entry: './docs/swagger/index.js',
  output: {
    path: path.resolve(__dirname, './docs/swagger/dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'css-loader'],
      },
    ],
  },
};
