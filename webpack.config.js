const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", //entry point where to bundle start
  mode: "development", // environment
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // file extentions to bundle it
        exclude: /(node_modules|bower_components)/, // excluding folders from bundling it
        loader: "babel-loader", // loader
        options: { presets: ["@babel/env"] } // defined in .babelrc file: the env preset allows us to transform ES6+ into more traditional javascript and the react preset does the same, but with JSX instead.
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};