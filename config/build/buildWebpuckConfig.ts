import type webpack from "webpack"
import type { BuildOptions } from "./types/config"
import { buildPlugins } from "./buildPlugins"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode, // Устанавливает мод dev,prod
    entry: paths.entry, // Настраивает точку входа в приложение
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
      publicPath: "/",
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined, // Нужно для отслеживания ошибок в дебаг режиме браузера
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
