import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import type {BuildOptions} from "./types/config"
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"

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
    // все таки нужен, без него warn [ReactRefreshPlugin] Hot Module Replacement (HMR) is not enabled! React Refresh requires HMR to function properly.
    isDev && new webpack.HotModuleReplacementPlugin(),

    isDev && new ReactRefreshPlugin(),

    isDev && new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ].filter(Boolean) as webpack.WebpackPluginInstance[]
}
