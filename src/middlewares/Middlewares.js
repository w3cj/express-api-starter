class Middlewares{
  constructor(){}

  notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
  }

  /* eslint-disable no-unused-vars */
  errorHandler(err, req, res, next) {
    /* eslint-enable no-unused-vars */
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
  } 

  requestLoggerMiddleware(req, res , next) {
    console.log(`${req.method} ${req.originalUrl}`);
    const start = new Date().getTime();
    res.on('finish', () => {
      const elapsed = new Date().getTime() - start;
      console.info(`${req.method} ${req.originalUrl} ${req.statusCode} ${elapsed}ms`);
    });
    next();
  }
}


module.exports = new Middlewares();
