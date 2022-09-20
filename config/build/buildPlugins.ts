import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export function buildPlugins({paths,isDev}:BuildOptions): webpack.WebpackPluginInstance[] {
    const {html} = paths

    return [
        new HtmlWebpackPlugin({
            template: html
        }),

        new webpack.ProgressPlugin(),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:6].css',
            chunkFilename:'css/[name].[contenthash:6].css'
        }),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),

        new webpack.HotModuleReplacementPlugin(),

        new ReactRefreshWebpackPlugin(),
    ]
}

