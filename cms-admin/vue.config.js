module.exports = {
    publicPath: '/cmsAdmin/',
    outputDir: 'cmsAdmin',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            '/': {
                target: `http://127.0.0.1:9080/`,
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        },
        disableHostCheck: true
    }
}
