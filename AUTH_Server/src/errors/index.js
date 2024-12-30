// Error-handling middleware

function errorHandler(err, req, res, next) {
  console.log("ARRIVED ERROR HANDLER!!!");
  if (res.headersSent) {
    return next(err);
  }
  console.log("ERROR HANDLER : ", err)
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: err.message || "Internal Server Error",
      name: err.name || "UNKNOWN_ERROR",
    },
  });
}

module.exports = { errorHandler };
