const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/signup',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
  app.use(
    '/signin',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
  app.use(
    '/counseling',
    createProxyMiddleware({
      target: 'http://localhost:8081/',
      changeOrigin: true,
    })
  );
  app.use(
    '/writecounselcard',
    createProxyMiddleware({
      target: 'http://localhost:8081/',
      changeOrigin: true,
    })
  );
};