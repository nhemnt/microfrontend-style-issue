const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  // cache: false,

  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001,
    historyApiFallback: true
},

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
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|svg|woff)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_01",
      filename: "remoteEntry.js",
      remotes: {
       app_02: "app_02@http://localhost:3002/remoteEntry.js",
        app_03: "app_03@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./SideNav": "./src/SideNav",
        "./Page": "./src/Page",
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
    }),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin()
  ],
};
