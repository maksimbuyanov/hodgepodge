import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import type { BuildOptions } from "./types/config"

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options
  const { html } = paths

  return [
    new HtmlWebpackPlugin({
      template: html,
    }),

    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
      chunkFilename: "css/[name].[contenthash:6].css",
    }),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),

    // Выдавал предупреждение, что автоматически добавляет его, по ключу hot в buildDevServer
    // new webpack.HotModuleReplacementPlugin(),

    new ReactRefreshWebpackPlugin(),
  ]
}
