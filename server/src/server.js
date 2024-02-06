import 'dotenv/config'
import express from "express";
import router from './routes/starWarsRoutes.js';
import cors from 'cors'
import { fetchDataAndSave } from './services/dataLoader.js';
import { globalData } from './globalData.js';
import { connection } from './database/mongo/config/Connection.js';
import * as swaggerUi from 'swagger-ui-express';
import swagger from './swagger/swagger.json' assert {type: 'json'}

const app = express();

app.use(express.json())


globalData.planets = await fetchDataAndSave(`${process.env.STARWARS_BASEURL}/planets`);
globalData.characters = await fetchDataAndSave(`${process.env.STARWARS_BASEURL}/people`);
globalData.films = await fetchDataAndSave(`${process.env.STARWARS_BASEURL}/films`);
globalData.starships = await fetchDataAndSave(`${process.env.STARWARS_BASEURL}/starships`);
        
app.use(cors(), router)

const port = process.env.PORT;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
