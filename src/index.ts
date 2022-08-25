import express from 'express'
import {Request, Response} from 'express'
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const app = express()

require('./db/mongodb');

app.use(express.json())

app.use(bodyParser.json())

const tableRoute = require('./actions/table-actions')

const restaurantRoute = require('./routes/restaurant')

app.use('/', restaurantRoute)

app.listen(3000)