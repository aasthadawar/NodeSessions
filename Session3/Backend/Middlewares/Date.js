const handleDate = (req, res, next) => {
  req.date = Date();
  next();
};

module.exports = handleDate;
