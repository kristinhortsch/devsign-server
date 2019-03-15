module.exports = (req, res, next) => {
  res.headers('Access-Control-Allow-Origin', '*');
  res.headers('Access-Control-Allow-Headers', '*');
  next();
};
