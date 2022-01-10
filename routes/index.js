var express = require('express');
var router = express.Router();

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

router.get('/', checkAuthenticated, (req, res, next) => {
  res.render('index.ejs', { name: req.user.name });
});

module.exports = router;
