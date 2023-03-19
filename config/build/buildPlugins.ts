import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import type { BuildOptions } from "./types/config"
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import CopyPlugin from "copy-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev, apiUrl, project } = options
  const { html } = paths
  const isProd = !isDev
  return [
    new HtmlWebpackPlugin({
      template: html,
    }),

    new webpack.ProgressPlugin(),

    // в дев режиме не нужен, тк не используется
    isProd &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:6].css",
        chunkFilename: "css/[name].[contenthash:6].css",
      }),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),

    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),

    // Выдавал предупреждение, что автоматически добавляет его, по ключу hot в buildDevServer
    // все таки нужен, без него warn [ReactRefreshPlugin] Hot Module Replacement (HMR) is not enabled! React Refresh requires HMR to function properly.
    // Хз, пока отключил...
    // isDev && new webpack.HotModuleReplacementPlugin(),

    isDev && new ReactRefreshPlugin(),

    isDev && new BundleAnalyzerPlugin({ openAnalyzer: false }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ].filter(Boolean) as webpack.WebpackPluginInstance[]
}
