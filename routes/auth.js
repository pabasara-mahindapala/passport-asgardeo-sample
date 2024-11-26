var passport = require("passport");
var AsgardeoStrategy = require("passport-asgardeo");
const ASGARDEO_BASE_URL = "https://api.asgardeo.io/t/";

passport.use(
  new AsgardeoStrategy(
    {
      issuer:
        ASGARDEO_BASE_URL + process.env.ASGARDEO_ORGANISATION + "/oauth2/token",
      authorizationURL:
        ASGARDEO_BASE_URL +
        process.env.ASGARDEO_ORGANISATION +
        "/oauth2/authorize",
      tokenURL:
        ASGARDEO_BASE_URL + process.env.ASGARDEO_ORGANISATION + "/oauth2/token",
      userInfoURL:
        ASGARDEO_BASE_URL +
        process.env.ASGARDEO_ORGANISATION +
        "/oauth2/userinfo",
      clientID: process.env.ASGARDEO_CLIENT_ID,
      clientSecret: process.env.ASGARDEO_CLIENT_SECRET,
      callbackURL: "/oauth2/redirect",
      scope: ["profile"],
    },
    function verify(
      issuer,
      uiProfile,
      idProfile,
      context,
      idToken,
      accessToken,
      refreshToken,
      params,
      verified
    ) {
      return verified(null, {
        uiProfile: uiProfile,
      });
    }
  )
);

var express = require("express");
var qs = require("querystring");
var router = express.Router();

router.get("/login", passport.authenticate("asgardeo"));

router.get(
  "/oauth2/redirect",
  passport.authenticate("asgardeo", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = router;
