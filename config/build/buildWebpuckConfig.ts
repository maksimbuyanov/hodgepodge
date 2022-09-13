import {BuildOptions} from './types/config';
import webpack from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig (options : BuildOptions) : webpack.Configuration {

    const {mode,paths,isDev} = options

    return {
        mode, //устанавливает мод dev,prod
        entry: paths.entry,  //настраивает точку входа в приложение
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined, //нужно для отслеживания ошибок в дебаг режиме браузера
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
