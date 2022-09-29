import webpack from 'webpack';
import {BuildPaths} from '../build/types/config';
import path from 'path';
import {buildCssLoader} from '../build/loaders/buildCssLoader';

export default ({config}:{config:webpack.Configuration})=> {

    const paths:BuildPaths = {
        build:"",
        entry:"",
        html:"",
        src: path.resolve(__dirname, "..", "..", "src")
    }
    config.resolve = {
        extensions: [".tsx", ".ts", ".js"], // Позволяет импортировать без указания ему расширения ( import a from "./Nav")
        preferAbsolute: true, // Предпочитает абсолютные импорты
        modules: [paths.src, "node_modules"], // Считать абсолютными пути для scr и node_modules
        alias: { "@": paths.src }, //  Задает вебпаке синоним @ для путя до src
        mainFiles: ["index"], // Задает для каждой папки главный файл index
    }

    config?.module?.rules?.push(buildCssLoader(true))

    return config
}
