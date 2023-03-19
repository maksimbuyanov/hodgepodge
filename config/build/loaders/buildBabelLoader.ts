import webpack from "webpack"
import { BuildOptions } from "config/build/types/config"
import BabelRemovePropsPlugin from "../babel/babelRemovePropsPlugin"

interface BuildLoadersProps extends BuildOptions {
  isTsx?: boolean
}

export const buildBabelLoader = (
  options: BuildLoadersProps
): webpack.RuleSetRule => {
  const { isDev, isTsx } = options
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          isDev && require.resolve("react-refresh/babel"),
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          "@babel/plugin-transform-runtime",
          isTsx && [
            BabelRemovePropsPlugin,
            {
              props: ["data-testid"],
            },
          ],
        ].filter(Boolean),
      },
    },
  }
}
