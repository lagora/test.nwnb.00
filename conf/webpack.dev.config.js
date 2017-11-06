import webpack from 'webpack'; // eslint-disable-line
import Config from 'webpack-config'; // eslint-disable-line

export default new Config().extend('./conf/webpack.base.config.js').merge({
  devtool: '#source-map',
  output: {
    pathinfo: true,
  },
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new webpack.EnvironmentPlugin('NODE_ENV'),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './public/',
    hot: true,
    overlay: true,
    watchContentBase: true,
  },
});
