const path = require("path");
module.exports = {
  // we should inform webpack that  we'are building a bundle
  // for Nodejs , rather than for the browser
mode:"development",
  target: "node",

  // tell webpack the root file of our server application
//   entry: "./src/index.js",
  entry:path.resolve(__dirname,'src','index.js'),

  // tell webpack where to put the output  file that we generated
  output: {
    filename: "bundle.js",
    // generate build file and append our bundle.js to this file "build"
    path: path.resolve(__dirname, "build"),
  },

  //tell webpack to run babel on every file it runs through
  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true,
    errorDetails:true,
},
module: {
    rules: [
      {
        //   test: /\.js$|jsx/,
        test: /\.(jsx|js|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//         options: {
//           presets: [
//             "react",
//             "stage-0",
//             ["env", { targets: { browsers: ["latest 2 versions"] } }],
//           ],
//         },
//       },
//     ],
//   },
};
