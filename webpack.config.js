const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


/** DEFINE ENV */
const env = process.env.env || 'development';
const production = env === 'production';

console.log("PRODUCTION: " + production);

/***************/

/** Define all plugins needed */
const JsUglifyConfig = new webpack.optimize.UglifyJsPlugin({
    compress:{
        warnings: true
    }
});

const VendorChunksConfig = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'assets/vendor.bundle.js'
});

const HtmlPluginConfig = new HtmlWebpackPlugin({
    template: 'frontend/index.html',
    filename: 'index.html'
});

const CompressionConfig = new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
});

const WebpackDefineConfig = new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify('production')
    }
});
/****************************/

const plugins = [HtmlPluginConfig, VendorChunksConfig, CompressionConfig];

if (production) {
    plugins.push(JsUglifyConfig);
    plugins.push(WebpackDefineConfig);
}

module.exports = {
    entry: {
        bundle: [
            "./frontend/js/index.js"
        ],
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        filename: production ? "assets/[name]-[hash].js" : "assets/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }, 
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader?name=img/img-[hash:6].[ext]"
            }
        ]
    },
    plugins: plugins
};