import type { ResolveOptions } from "webpack"
import type { BuildOptions } from "./types/config"

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options
  const { src } = paths
  return {
    extensions: [".tsx", ".ts", ".js"], // Позволяет импортировать без указания ему расширения ( import a from "./Nav")
    preferAbsolute: true, // Предпочитает абсолютные импорты
    modules: [src, "node_modules"], // Считать абсолютными пути для scr и node_modules
    alias: { "@": src }, //  Задает вебпаке синоним @ для путя до src
    mainFiles: ["index"], // Задает для каждой папки главный файл index
  }
}
