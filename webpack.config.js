const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'head',
        scriptLoading: 'defer',
    }),
],
module: {
    rules: [
        {
            test: /\.jsx?$/,
            use: ['babel-loader'],
          },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
},
resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
};