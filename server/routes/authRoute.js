const router = require('express').Router();
const passport = require('../passport');

const redirectURL = process.env.CLIENT_URL;

router.get('/login/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/return', 
    passport.authenticate('google', { failureRedirect: redirectURL }),
    function (req, res) {
        res.redirect(redirectURL);
    }
);

router.get('/check-auth', (req, res) => {
    console.log('user session: ', req.user);
    if (req.user === undefined) return res.status(401).send('unauthorized');
    res.status(200).json(req.user);
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(redirectURL);
  });

module.exports = router;