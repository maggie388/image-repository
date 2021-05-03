require('dotenv').config();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users = require('./models/usersTable');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SERVER_URL} = process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${SERVER_URL}/api/auth/return`
  },
  (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      Users
        .where({ google_id: profile.id })
        .fetch({ require: false })
        .then((user) => {
            if (!user) {
                console.log('no user');
                new Users({
                    google_id: profile.id,
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    email: profile.emails[0].value
                })
                .save()
                .then((user) => {
                    console.log('user added')
                    return done(null, user);
                })
            } else {
                return done(null, user);
            }
        })
  }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users
        .where({ id })
        .fetch()
        .then((user) => {
            done(null, user);
        })
});

module.exports = passport;