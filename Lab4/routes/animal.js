const express = require('express');

const { homeView, formView, formSubmission, getAllAnimals, editAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalController');

const router = express.Router();

router.get('/', homeView);

router.get('/entry-form', formView);
router.post('/entry-form', formSubmission);

router.get('/all-animals', getAllAnimals);

router.get('/edit-animal/:id', editAnimal);
router.post('/update-animal/:id', updateAnimal);

router.post('/delete-animal/:id', deleteAnimal)


module.exports = router;