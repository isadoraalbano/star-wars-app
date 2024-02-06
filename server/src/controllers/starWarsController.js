import { findFilms , findAndOrderByName, findAndOrderByDiameter, saveSearchTitle } from '../services/starWarsService.js';
import 'dotenv/config';

export class StarWarsController {
    static async findCharacters (req, res) {
        try {
            const results = findAndOrderByName('characters');
            return res.status(200).json(results)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findPlanets (req, res) {
        try {
            const results = findAndOrderByDiameter()
            return res.status(200).json(results)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findStarships (req, res) {
        try {
            const results = findAndOrderByName('starships')
            return res.status(200).json(results)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findFilms(req, res) {
        try {
            const title = req.query?.title
            const results = findFilms(title)
            return res.status(200).json(results)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async saveSearchHistory(req, res) {
        try {
            const title = req.body.title;
            await saveSearchTitle(title)
            return res.status(200).json('History saved!')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}