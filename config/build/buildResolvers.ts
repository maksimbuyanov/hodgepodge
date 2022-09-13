import {ResolveOptions} from 'webpack';
import {BuildOptions} from './types/config';


export function buildResolvers (options: BuildOptions): ResolveOptions {
    const {paths} = options
    const {src } = paths
    return {
        extensions: ['.tsx', '.ts', '.js'], // позволяет импортировать без указания ему расширения ( import a from "./Nav")
        preferAbsolute: true, // предпочитает абсолютные импорты
        modules: [src,'node_modules'], //считать абсолютными пути для scr и node_modules
        alias:{'@':src}, //  задает вебпаке синоним @ для путя до src
        mainFiles: ['index'] // задает для каждой папки главный файл index
    }
}
