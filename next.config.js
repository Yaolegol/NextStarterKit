const withLess = require('@zeit/next-less');

module.exports = withLess({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it

        // babel
        config.module.rules.push(
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            }
        )

        // // less
        // config.module.rules.push(
        //     {
        //         test: /\.less$/,
        //         use: [
        //             {
        //                 loader: "css-loader",
        //             },
        //             "less-loader",
        //         ],
        //     }
        // )
        //
        // // css
        // config.module.rules.push(
        //     {
        //         test: /\.css$/,
        //         use: [
        //             MiniCssExtractPlugin.loader,
        //             "style-loader",
        //             "css-loader",
        //             "postcss-loader",
        //         ],
        //     },
        // )

        // images
        config.module.rules.push(
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'public',
                },
            },
        )

        // svg
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
        )

        // fonts
        config.module.rules.push(
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'public',
                },
            },
        )

        // config.plugins.push(
        //     new MiniCssExtractPlugin({
        //         ignoreOrder: true,
        //     })
        // )

        // Important: return the modified config
        return config
    },
});
