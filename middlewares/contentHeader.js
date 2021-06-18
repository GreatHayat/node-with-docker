module.exports = function setContentHeader(req, res, next) {
  //res.setHeader("X-New-Policy", "Success");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  res.setHeader("Content-Range", "users 0-5/10");
  next();
};
