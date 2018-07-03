const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    // removing 'src' directory from entry point, since 'context' is taking care of that
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      $: "jquery",
        jQuery: "jquery"
      })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    port: 12000,
    stats: 'errors-only',
    open: true
  },
  devtool: 'inline-source-map'
}

module.exports = config;
//   plugins: [
//     new webpack.ProvidePlugin({
//       $: "jquery",
//       jQuery: "jquery"
//     })
//   ]
