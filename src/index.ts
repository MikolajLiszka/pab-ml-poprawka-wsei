import express from 'express'
import {Request, Response} from 'express'
import { MongoClient } from 'mongodb';

const app = express()

require('./db/mongodb');

app.use(express.json())

const restaurantRoute = require('./routes/restaurant')

app.use('/', restaurantRoute)

app.listen(3000)