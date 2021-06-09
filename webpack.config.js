import path from 'path'



module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('src'),
    }
  },
  mode: "development",//表识开发环境
  entry: ["./src/index.js"], // 入口文件
  output: { // 打包后输出目录
    // 输出目录
    path: path.join(__dirname, "dist"),
    // 文件名称
    filename: "bundle.js"
  },
  module: {}, // loader配置
  plugins: [],// 插件配置
  devServer: {}//开发服务
}