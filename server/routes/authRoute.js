const router = require('express').Router();
const passport = require('../passport');

router.get('/login/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/return', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
    function (req, res) {
        res.redirect('http://localhost:3000');
    }
);

router.get('/check-auth', (req, res) => {
    console.log('user session: ', req.user);
    if (req.user === undefined) return res.status(401).send('unauthorized');
    res.status(200).json(req.user);
})

module.exports = router;