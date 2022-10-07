import type webpack from "webpack"
import type { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"
import { buildSvgLoader } from "./loaders/buildSvgLoader"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [{ loader: "file-loader" }],
  }

  const cssLoader = buildCssLoader(isDev)

  // const fontsLoader = {
  //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //   // use: [{ loader: "file-loader" }],
  //   use: ["url-loader?limit=100000"],
  // }

  // const fontsLoader = {
  //   test: /\.(ttf|eot|woff|woff2|svg)$/,
  //   use: {
  //     loader: "file-loader",
  //     options: {
  //       name: "[name].[ext]",
  //       outputPath: "fonts/",
  //     },
  //   },
  // }

  // Если бы в проекте не использовался TS, то нужно было бы ставить лоадер babel-loader
  // для того, что бы этот бабел транспилировал код jsx в js
  const typescriptLoader = {
    // Обрабатывает файлы ts перед сборкой
    test: /\.tsx?$/, // Обрабатывает все что попадает в regex
    use: "ts-loader", // То, чем обрабатывает
    exclude: /node_modules/, // Файлы, папки которые точно не нужно обрабатывать
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  }
  return [
    cssLoader,
    svgLoader,
    fileLoader,
    babelLoader,
    typescriptLoader,
    // fontsLoader,
  ]
}
