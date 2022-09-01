import express from 'express'
import {Request, Response} from 'express'
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import { ProductActions } from './actions/product-actions';
import { Employee } from './db/DTO/employee-model';
import { Reservation } from './db/DTO/reservation-model';

const app = express()

require('./db/mongodb');

app.use(express.json())

app.use(bodyParser.json())

const tableRoute = require('./routes/table')

const restaurantRoute = require('./routes/restaurant')

const productRoute = require('./routes/product')

const dishRoute = require('./routes/dish')

const employeeRoute = require('./routes/employee')

const reservationRoute = require('./routes/reservation')

app.use('/', restaurantRoute)

app.use('/', tableRoute)

app.use('/', productRoute)

app.use('/', dishRoute)

app.use('/', employeeRoute)

app.use('/', reservationRoute)

app.listen(3000)