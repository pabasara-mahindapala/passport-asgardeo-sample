var express = require("express");
var ensureLogIn = require("connect-ensure-login").ensureLoggedIn;
var router = express.Router();

var ensureLoggedIn = ensureLogIn();
/* GET users listing. */
router.get("/", ensureLoggedIn, function (req, res, next) {
  res.send("This is a protected resource");
});

module.exports = router;
