const path = require("path")
const nodeExternals = require("webpack-node-externals")
const WebpackShellPlugin = require("webpack-shell-plugin")

const { NODE_ENV = "production" } = process.env

const plugins =
  NODE_ENV === "production"
    ? []
    : [
        new WebpackShellPlugin({
          onBuildEnd: ["yarn run:dev"]
        })
      ]

module.exports = {
  entry: "./src/index.js",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js"]
  },
  watch: NODE_ENV === "development",
  plugins: plugins
}
