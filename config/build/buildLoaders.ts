import type webpack from "webpack"
import type { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"
import { buildSvgLoader } from "./loaders/buildSvgLoader"
import { buildBabelLoader } from "./loaders/buildBabelLoader"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [{ loader: "file-loader" }],
  }

  const cssLoader = buildCssLoader(isDev)

  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })

  return [cssLoader, svgLoader, fileLoader, codeBabelLoader, tsxCodeBabelLoader]
}
