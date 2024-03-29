const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new MonacoWebpackPlugin({
        languages: ['cpp', 'csharp', 'csp', 'go', 'javascript', 'objective', 'python', 'rust', 'java']
    })
  ]
};