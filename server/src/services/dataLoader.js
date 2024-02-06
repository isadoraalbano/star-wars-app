import request from 'request-promise-any';
import { DatabaseMemory } from '../database/inMemoryDatabase.js';

const database = new DatabaseMemory();

export const fetchDataAndSave = async (url) => {
    try {
        const body = await request(url);
        const bodyParser = JSON.parse(body);
        database.save(bodyParser.results);
        const result = database.list()
        if(bodyParser.next){
            return await fetchDataAndSave(bodyParser.next)
        }else{
            database.refresh()
            return result;
        }
    } catch (error) {
        console.log(error.message)
        throw error;
    }
}