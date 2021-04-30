require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users = require('./models/usersTable');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_URL}/api/auth/return`
  },
  function(accessToken, refreshToken, profile, cb) {
      Users
        .where({ googleId: profile.id })
        .fetch({ require: false })
        .then((user) => {
            if (!user) {
                console.log('no user');
                new Users({
                    googleId: profile.id
                })
                .save()
                .then((user) => {
                    console.log('user added')
                    return cb(null, user);
                })
            } else {
                return cb(null, user);
            }
        })
    // Users.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;