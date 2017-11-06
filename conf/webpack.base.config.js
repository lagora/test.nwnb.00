import Config from 'webpack-config'; // eslint-disable-line

export default new Config().merge({
  output: {
    filename: './public/[name].js',
    hotUpdateChunkFilename: './tmp/[id].[hash].hot-update.js',
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
});
