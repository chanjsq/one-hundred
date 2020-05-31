const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware;
// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(
    proxy('/yesapi', {
      target: 'https://puluter.cn',
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        '^/yesapi': '/server.php'
      }
    })
  );
  app.use(
    proxy('/agora/', {
      target: 'https://api.agora.io',
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        '^/agora/': '/',
      }
    }),
  );
};
