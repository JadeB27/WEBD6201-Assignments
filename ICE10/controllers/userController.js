const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

require('../model/User');
const User = mongoose.model('User');

const homeView = (req, res) => {
    const pageTitle = "Home";
    const homeContent = "This is the homepage. Welcome!"
    res.render('home', {
        pageTitle: pageTitle
    });
};

const formView = (req, res) => {
    const pageTitle = "Registration Form"
    res.render("form", {
        pageTitle: pageTitle
    });
};

const formSubmission = (req, res) => {
    console.log(req.body);
    const { fullName, email, password, confirm } = req.body;

    if (password != confirm) {
        console.log("Passwords must match!")
    } else {
        User.findOne({ email: email }).then((user) => {
            if (user) {
                console.log('Found user! Email already exists.')
                pageTitle = "Already Registered"
                message = "You are already registered"
                res.render('form-submission', {
                    pageTitle: pageTitle,
                    alreadyRegistered: true,
                    message: message
                });
            } else {
                const newUser = new User({
                    fullName, email, password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) throw err;

                    newUser.password = hash;
                    newUser.save().then(() => {
                        const pageTitle = "Form Submission Page"
                        const registeredMessage = "You are newly registered."
                        res.render('/form-submission', {
                            pageTitle: pageTitle,
                            alreadyRegistered: false,
                            registeredMessage: registeredMessage
                        });
                    }).catch((err) => console.log(err));
                });
            }
        });
    }
};

module.exports = {
    homeView,
    formView,
    formSubmission
};