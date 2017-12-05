const {resolve} = require("path");

module.exports = {
  entry: "./src/js/script.js",
  output: {
    // publicPath: dev ? "/dist/" : "",
    path: resolve(__dirname, "dist/"),
    filename: "bundle.js"
    // filename: prod ? "[name].[chunkhash].js" : "[name].js"
  }
};