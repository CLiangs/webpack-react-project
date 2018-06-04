const path = require("path");
const webpack = require("webpack");
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
module.exports = options => {
  return {
    entry: options.entry,
    output: Object.assign(
      {
        path: path.resolve(process.cwd(), "build")
      },
      options.output
    ),
    mode: options.mode || process.env.NODE_ENV,
    module: {
      rules: (options.module ? options.module.rules : []).concat([
        {
          //babel转换
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"]
        }
      ])
    },
    optimization: options.optimization,
    plugins: options.plugins.concat([
      // 环境变量定义插件
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      // 编译进度条
      new ProgressBarPlugin({ 
        format:
          "  build [:bar] " +
          chalk.green.bold(":percent") +
          " (:elapsed seconds)"
      })
    ]),
    devtool: options.devtool, //是否生成与如何生成source-map
    performance: options.performance || {} //性能提示
  };
};
