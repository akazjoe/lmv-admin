module.exports = {
    devServer: {
        port: '80',
        proxy: {
            '/apis': {
                target: 'http://www.mylaravelcms.com/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
