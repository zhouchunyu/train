module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'] // 配置预设 env包含了所有的js规范
                    }
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },
        ]
    }
}