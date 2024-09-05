const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const createStyledComponentsTransformer =
    require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            getCustomTransformers: () => ({
                                before: [styledComponentsTransformer],
                            }),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
        }),
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
}
