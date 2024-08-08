const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/mfp/supportticket/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'supportticket',
            filename: 'remoteEntry.js',
            exposes: {
                './SupportticketApp': './src/bootstrap'
            },
            shared: ['react', 'react-dom', 'react-router-dom']
        })
    ]

};
module.exports = merge(commonConfig, prodConfig);