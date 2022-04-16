<<<<<<< HEAD
/* eslint-disable import/no-anonymous-default-export */
import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
=======
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
>>>>>>> 8b420b3ea16ffc1ce372e4f37f8e883e386185ee
  app.use(
    createProxyMiddleware("/api", {
      target: "localhost:8081", //localhost:8080 등 설정
      changeOrigin: true,
    })
  );
}
