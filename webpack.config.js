const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:'./src/index.tsx',
    output: {
        path:path.resolve(__dirname,'./build'),
        filename: "webpack.js",
    },
    module: {
        rules:[
            {test:/\.css$/,use:[{loader:'style-loader'},{loader:'css-loader'}]},
            {test:/\.less$/,use:[{loader:'style-loader'},{loader:'css-loader'},{loader:'less-loader'}]},
            {test:/\.(js|jsx)$/,exclude:/node_modules/,loader:'babel-loader'},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            },
            {test:/\.(ts|tsx)$/,use:[{loader:'ts-loader', options: {
                        // 加快编译速度
                        transpileOnly: true,
                        // 指定特定的ts编译配置，为了区分脚本的ts配置
                        configFile: path.resolve(__dirname, './tsconfig.json')
                    }}]}
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            filename: path.resolve(__dirname,"./index.html"),
            template: "index.html",
            contentBase:false

        }
    )],
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
            '.json'
        ]
    },
    devServer: {
        port:'3001',
        hot:true,
        open:true,
        historyApiFallback:true
    },

}