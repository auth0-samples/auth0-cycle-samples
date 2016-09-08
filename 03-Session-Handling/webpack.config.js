module.exports = {
  entry: './app/index',

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass'],
        test: /\.scss$/
      }
    ]
  },

  output: {
    filename: 'application.js',
    path: './public/'
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['app', 'node_modules'],
    root: __dirname
  },

  sassLoader: {
    includePaths: ['app']
  }
};
