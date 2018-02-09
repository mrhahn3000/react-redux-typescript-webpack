import path from 'path'
import webpack from 'webpack'
import webpackNotifier from 'webpack-notifier'
import cleanWebpackPlugin from 'clean-webpack-plugin'
import htmlWebpackPlugin from 'html-webpack-plugin'
import extractTextPlugin from 'extract-text-webpack-plugin'

const BASE_DIR = path.resolve('./');
const APP_DIR = path.resolve('./', 'src');
const BUILD_DIR = path.resolve('./', 'build');

console.info("##### Folders #####");
console.info("  ");
console.info("Base:", BASE_DIR);
console.info("Sources:", APP_DIR);
console.info("Output:", BUILD_DIR);
console.info("  ");

module.exports = {
    devtool: 'eval',
    /*
     * app.tsx represents the entry point to your web application. Webpack will
     * recursively go through every "require" statement in app.tsx and
     * efficiently build out the application's dependency tree.
     */
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            APP_DIR + '/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    /*
     * The combination of path and filename tells Webpack what name to give to
     * the final bundled JavaScript file and where to store this file.
     */
    output: {
        filename: '[name].js',
        path: BUILD_DIR,
        publicPath: '/'
    },

    /*
     * resolve lets Webpack know in advance what file extensions you plan on
     * "require"ing into the web application, and allows you to drop them
     * in your code.
     */
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.woff'],
        modules: [APP_DIR, 'node_modules']
    },

    module: {
        /*
         * Each loader needs an associated Regex test that goes through each
         * of the files you've included (or in this case, all files but the
         * ones in the excluded directories) and finds all files that pass
         * the test. Then it will apply the loader to that file. I haven't
         * installed ts-loader yet, but will do that shortly.
         */
        rules: [
            {
                test: /\.(s*)css$/,
                use: extractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            },
            {test: /\.tsx$/, use: ['babel-loader', 'ts-loader']}
        ]
    },
    /*
     + Define additional plugins for ease of usage
     */
    plugins: [
        new cleanWebpackPlugin(BUILD_DIR, {root: BASE_DIR}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpackNotifier({alwaysNotifiy: true}),
        new htmlWebpackPlugin({template: APP_DIR + '/index.html'}),
        new extractTextPlugin({filename: '[name].css'})
    ],

    devServer: {
        clientLogLevel: 'none',
        // compress: true, // enable gzip compression
        historyApiFallback: {
            index: '/'
        },
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        inline: true,
        port: 8082,
        stats: 'minimal',
        watchOptions: {
            ignored: '/node_modules'
        }
    }
};
