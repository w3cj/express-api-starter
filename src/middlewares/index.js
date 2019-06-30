const compose = require('compose-middleware').compose;
const Middleware = require('./Middlewares');

let middleware = compose([
  Middleware.requestLoggerMiddleware,
  Middleware.notFound,
  Middleware.errorHandler
]);

module.exports = middleware;
