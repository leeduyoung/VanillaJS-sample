var path = require('path');
module.exports = {
  entry: './src/codesquad.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'targets': {
                  'browsers': ['last 2 versions']
                },
                'debug': true
              }]
            ]
          }
        }
      }
    ]
  },
  mode: 'development'
  // mode: 'production'
}
