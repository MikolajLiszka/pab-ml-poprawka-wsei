import express from 'express'
import {Request, Response} from 'express'
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import { ProductActions } from './actions/product-actions';

const app = express()

require('./db/mongodb');

app.use(express.json())

app.use(bodyParser.json())

const tableRoute = require('./routes/table')

const restaurantRoute = require('./routes/restaurant')

const productRoute = require('./routes/product')

const dishRoute = require('./routes/dish')

app.use('/', restaurantRoute)

app.use('/', tableRoute)

app.use('/', productRoute)

app.use('/', dishRoute)

app.listen(3000)