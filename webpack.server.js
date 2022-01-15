const path = require("path");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config = {
  // we should inform webpack that  we'are building a bundle
  // for Nodejs , rather than for the browser
  mode: "development",
  target: "node",

  // tell webpack the root file of our server application
  //   entry: "./src/index.js",
  entry: path.resolve(__dirname, "src", "index.js"),

  // tell webpack where to put the output  file that we generated
  output: {
    filename: "bundle.js",
    // generate build file and append our bundle.js to this file "build"
    path: path.resolve(__dirname, "build"),
  },
};
module.exports = merge(baseConfig, config);
