const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = webpack.container
  .ModuleFederationPlugin;
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  // cache: false,
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3002,
    historyApiFallback: true
},


  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".mjs"],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_02",
      filename: "remoteEntry.js",
      remotes: {
        app_01: "app_01@http://localhost:3001/remoteEntry.js",
        app_03: "app_03@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        ...deps,
        "@material-ui/core": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
     // Only update what has changed on hot reload
     new webpack.HotModuleReplacementPlugin()
  ],
};
