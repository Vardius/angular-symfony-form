var loaders = require("./loaders");
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'angular-symfony-form.js',
        path: 'dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    externals: {
        'angular': 'angular',
        'angular-messages': 'angular-messages'
    },
    devtool: "source-map-inline",
    module: {
        loaders: loaders,
        postLoaders: [
            {
                test: /^((?!\.spec\.js).)*.js/,
                exclude: /(node_modules|bower_components)/,
                loader: 'istanbul-instrumenter'
            }
        ]
    }
};

