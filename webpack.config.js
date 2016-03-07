var path = require('path');

module.exports = {
  entry: {
    main: './app/main'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'includes'),
      loader: 'script'
    }]
  }
};
