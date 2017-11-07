import webpack from 'webpack'; // eslint-disable-line
import Config from 'webpack-config'; // eslint-disable-line

export default new Config().extend({
  './conf/webpack.dev.config.js': (config) => {
    return ({
      ...config,
      debug: undefined,
      devtools: undefined,
      output: {
        ...config.output,
        pathinfo: undefined,
      },
      devServer: undefined,
    });
  },
})
  .merge({
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
        },
      }),
    ],
  });
