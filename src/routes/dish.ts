import express, { Router } from 'express'
import { Request, Response } from 'express'
const route = express.Router();
const dishActions = require('../actions/dish-actions');

route.get('/dishes', dishActions.getAllDishes);

route.post('/dishes/:id', dishActions.saveDish);



module.exports = route;