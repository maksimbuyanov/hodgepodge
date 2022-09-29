import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean)=> {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Если дев, то просто задаем style, если prod то СОЗДАЕТ файл css

            {
                loader: "css-loader", // Работает с css импортируемыми в jsx/tsx файлы
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:2]"
                            : "[hash:base64:8]",
                    },
                },
            },

            "sass-loader", // Компилирует sass в css
        ],
    }
}
