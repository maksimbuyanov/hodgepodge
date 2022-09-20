import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildLoaders (options:BuildOptions):webpack.RuleSetRule[] {

    const {isDev} = options

    const svgLoader = {
        test :/\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test :/\.(png|jpe?g|gif)$/i,
        use: [{loader:"file-loader"}]
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev? "style-loader" : MiniCssExtractPlugin.loader, // если дев, то просто задаем style, если prod то СОЗДАЕТ файл css

            {
                loader: "css-loader",    // работает с css импортируемыми в jsx/tsx файлы
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:2]' : '[hash:base64:8]'
                    },
                },
            },

            "sass-loader"   // компилирует sass в css
        ]
    }

    //Если бы в проекте не использовался TS, то нужно было бы ставить лоадер babel-loader
    // для того, что бы этот бабел транспилировал код jsx в js
    const typescriptLoader = {
        // обрабатывает файлы ts перед сборкой
        test: /\.tsx?$/, //обрабатывает все что попадает в regex
        use: 'ts-loader', // то, чем обрабатывает
        exclude: /node_modules/, // файлы, папки которые точно не нужно обрабатывать
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
    return [
        cssLoader,
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader
    ]
}
