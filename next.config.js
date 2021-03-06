"use strict";
const path = require('path');
const glob = require('glob');

module.exports = {
    webpack: (config, { dev }) => {
        config.module.rules.push(
            {
                test: /\.(css|less)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            }
            ,
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader']
            }
            ,
            {
                test: /\.less($|\?)/,
                use: ['babel-loader', 'raw-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map((d) => path.join(__dirname, d))
                                .map((g) => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        )

        return config
    }
}
