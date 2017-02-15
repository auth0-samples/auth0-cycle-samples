var path = require("path");
module.exports = {
    entry: './app/index',

    module: {
        rules: [{
                exclude: /node_modules/,
                loader: 'babel',
                test: /\.js$/
            },
            {
                exclude: /node_modules/,
                use: ['style', 'css', 'sass'],
                test: /\.scss$/
            }
        ]
    },

    output: {
        filename: 'application.js',
        path: path.join(__dirname, 'public/')
    },

    resolve: {
        extensions: ['.js'],
        enforceExtension: false,
        modules: [
            path.join(__dirname, "/app"),
            __dirname,
            'node_modules'
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    }
};