const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
  SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    'semantic-ui-react',
    path.join(paths.JS, 'app.jsx'),
  ],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file

  ],

  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // CSS loader to CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ],
  },

  // Enable importing JS files without specifying their's extenstion
  // So we can write:
  // import MyComponent from './my-component';
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
