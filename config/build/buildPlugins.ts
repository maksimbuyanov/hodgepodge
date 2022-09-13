import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildPaths} from './types/config';



export function buildPlugins(props: BuildPaths): webpack.WebpackPluginInstance[] {
    const {html} = props

    return [
        new HtmlWebpackPlugin({
            template: html
        }),

        new webpack.ProgressPlugin(),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        })
    ]
}

