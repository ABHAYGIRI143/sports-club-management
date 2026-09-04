const notFound = (req, res, next) => {
  const error = new Error(`API route not found: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

module.exports = notFound;
