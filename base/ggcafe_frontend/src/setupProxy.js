const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "localhost:8081", //localhost:8080 등 설정
      changeOrigin: true,
    })
  );
};
