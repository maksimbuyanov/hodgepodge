import path from "path" // Подтягивает из nodejs путь до корневого каталога
import type webpack from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpuckConfig"
import type { BuildEnv, BuildPaths } from "./config/build/types/config"

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    buildLocales: path.resolve(__dirname, "build", "locales"),
    locales: path.resolve(__dirname, "public", "locales"),
  }

  const mode = env?.mode || "development"
  const PORT = env?.port || 3000
  const isDev = mode === "development"
  const apiUrl = env?.apiUrl || "http://localhost:8000"

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: "frontend",
  })

  return config
}
