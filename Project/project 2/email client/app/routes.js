var model = {};
require("./dummy_model.js")(model);

module.exports = function(app, passport, fs) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});
	
	app.get('/login', function(req, res) {
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/emails',
            failureRedirect : '/login',
            failureFlash : true
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

	app.get('/signup', function(req, res) {
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/startpage',
		failureRedirect : '/signup',
		failureFlash : true
	}));

	app.get('/startpage', isLoggedIn, function(req, res) {
		res.render('startpage.ejs', {
			user : req.user
		});
	});
	
	app.get('/emails', isLoggedIn, function(req, res) {
		var letters = model.getLetters(req.user);
		if (typeof letters !== typeof []) {
			throw new TypeError();
		}
		res.render('emails.ejs', {
			user : req.user,
			letters : letters
		});
	});
	
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
