const path = require("path");
const webpack = require("webpack");
/**
 * 尽量减小搜索范围
 * target: 'dll_[name]' 指定导出变量名字
 */
module.exports = {
  entry: {
    vendor: ["jquery", "lodash", "axios"]
  },
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "[name].dll.js",
    library: "dll_[name]" // 全局变量名，其他模块会从此变量上获取里面模块
  },
  // manifest是描述文件
  plugins: [
    new webpack.DllPlugin({
      name: "dll_[name]",
      path: path.resolve(process.cwd(), "build/manifest.json")
    })
  ]
};
