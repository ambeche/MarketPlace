'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const authRoute = require('./Routes/authRoute');

if(process.env.SERVER === 'dev_localhost') {
    require('./secure/localhost')(app);
  } else {
    require('./secure/server')(app);
  }

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true }));

passport.use(new LocalStrategy(
    function (username,password,done) {
        db.user.find({where : {
                username : username
            }}).then(function (user) {
            bcrypt.compare(password, user.password, function (err,result) {
                if (err) { return done(err); }
                if(!result) {
                    return done(null, false, { message: 'Incorrect username and password' });
                }
                return done(null, user);
            })
        }).catch(function (err) {
            return done(err);
        })
    }
));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {

    done(null, {username: username});
});

app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/');
    });

app.post('/register', (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("B4c0/\/", salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });
    res.send('account successfully created ☺');
});

app.use('/auth', authRoute);


app.use(express.static('UI'));

app.use('/thumbnails', express.static('thumbnails'));

app.use( express.static('uploads'));

const productRoute = require('./Routes/productRoute.js');
const userRoute = require('./Routes/userRoute.js');

app.use('/product', productRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`MarketPlace app listening on secured port ${port}!`));
