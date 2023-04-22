const mongoose = require("mongoose");

// Require the exported Animal model
require('../model/Animal');
const Animal = mongoose.model('Animal');



const homeView = (req, res) => {
    const pageTitle = "Home";
    res.render('index', {
        pageTitle: pageTitle,
    });
};

const formView = (req, res) => {
    const pageTitle = "Animal Form"
    res.render("form", {
        pageTitle: pageTitle
    });
};

const formSubmission = (req, res) => {
    console.log(req.body);
    const { zoo, scientificName, commonName, givenName, gender, dateOfBirth, age, isTransportable} = req.body;
    Animal.findOne({ scientificName: scientificName }).then((animal) => {
        if (animal) {
            console.log('Found Animal! Scientific Name already exists.')
            pageTitle = "Already Registered"
            message = "Animal already registered"
            res.render('form-submission', {
                pageTitle: pageTitle,
                alreadyRegistered: true,
                message: message
            });
        } else {
            const newAnimal = new Animal({
                zoo, scientificName, commonName, givenName, gender, dateOfBirth, age, isTransportable
            });
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                newAnimal.save().then(() => {
                    const pageTitle = "Form Submission Page"
                    const registeredMessage = "Newly registered animal."
                    res.render('/form-submission', {
                        pageTitle: pageTitle,
                        alreadyRegistered: false,
                        registeredMessage: registeredMessage
                    });
                }).catch((err) => console.log(err));
            });
        }
    });
};

const getAllAnimals = (req, res) => {
    User.find().lean().then((animals) => {
        if (getAllAnimals) {
            res.render('all-animals', {
                pageTitle: 'Animal List',
                animals: animals
            });
        }
        //else?
    });
};

const editAnimal = (req, res) => {
    let id = req.params.id
    User.findOne({ _id: id }).lean().then((animal) => {
        res.render('edit-animal', {
            animal: animal,
            id: id,
            pageTitle: 'Edit Animal',
            
        });
    });
};

const updateAnimal = async (req, res) => {
    const update = { zoo: req.body.zoo, scientificName: req.body.scientificName, commonName: req.body.commonName, givenName: req.body.givenName, gender: req.body.gender, dateOfBirth: req.body.dateOfBirth, age: req.body.dateOfBirth, isTransportable: req.body.isTransportable }
    const id = req.params.id;
    const filter = { _id: id }
    let doc = await Animal.findOneAndUpdate(filter, update, { new: true });
    res.redirect('/all-animals');
};

const deleteAnimal = async (req, res) => {
    console.log("Deleting!")
    const id = req.params.id;
    const filter = { _id: id }
    let deletedCount = Animal.deleteOne(filter);
    res.redirect('/all-animals');
};

module.exports = {
    homeView,
    formView,
    formSubmission,
    getAllAnimals,
    editAnimal,
    updateAnimal,
    deleteAnimal
};