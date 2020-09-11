module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://handh-4ed2b1ee.localhost.run/',
                secure: false
            }
        },
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             webpackImporter: false,
    //             prependData: '@import "@/assets/scss/variables.scss;"',
    //         },
    //     },
    // },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
    transpileDependencies: [
        'vuetify'
    ]
}
