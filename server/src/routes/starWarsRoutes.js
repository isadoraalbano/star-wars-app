import express from 'express'

import { StarWarsController } from '../controllers/starWarsController.js';

const router = express.Router();

router
    .get('/characters', StarWarsController.findCharacters)
    .get('/planets', StarWarsController.findPlanets)
    .get('/starships', StarWarsController.findStarships)
    .get('/films', StarWarsController.findFilms)
    .post('/films', StarWarsController.saveSearchHistory)



export default router;