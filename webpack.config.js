/**
 * Created by mrowinski on 16.12.2016.
 */
/**We are setting webpack entry point to be main.js. Output path is the place where bundled app will be served.
 * We are also setting development server to 8080 port.
 *  You can choose any port you want. And lastly, we are setting babel loaders to search for js files and use
 *  es2015 and react presets that we installed before. ...**/



var config = {
    entry: './main.js',

    output: {
        path:'./',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080,
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;