require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(require('cors')({ origin: true, credentials: true }));
app.use(require('morgan')('dev'));
app.use(require('cookie-parser')());
app.use(express.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

const passport = require('./passport');

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', require('./routes/authRoute'))

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
