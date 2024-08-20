const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.openweathermap.org/data/2.5',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
            onProxyReq: (proxyReq, req, res) => {
                const city = req.query.city;
                const apiKey = '7715841c6944dd0d98f822a9495e2a7e';
                proxyReq.path = `/weather?q=${city}&appid=${apiKey}&units=metric`;
            },
        })
    );
};