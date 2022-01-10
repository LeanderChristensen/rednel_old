var express = require('express');
var router = express.Router();

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

router.get('/', checkNotAuthenticated, function(req, res, next) {
  res.render('login.ejs');
});

module.exports = router;
