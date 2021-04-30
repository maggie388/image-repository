const router = require('express').Router();
const passport = require('../passport');

router.get('/login', (req, res) => {
    res.send('login page');
});

router.get('/login/google', 
    passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.email' })
);

router.get('/return', 
    passport.authenticate('google', { failureRedirect: '/api/auth/failure' }),
    function (req, res) {
        res.redirect('/api/auth/success');
    }
);

router.get('/success', (req, res) => {
    res.send('login success');
});

router.get('/failure', (req, res) => {
    res.send('login failed');
});

module.exports = router;