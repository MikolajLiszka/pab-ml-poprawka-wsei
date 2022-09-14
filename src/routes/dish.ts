import express, { Router } from 'express'
import { Request, Response } from 'express'
const route = express.Router();
const dishActions = require('../actions/dish-actions');

route.get('/dishes', dishActions.getAllDishes);

route.get('/dishes/:id', dishActions.getDish);

route.post('/dishes', dishActions.saveDish);

route.put('/dishes/:id', dishActions.updateDish);

route.delete('/dishes/:id', dishActions.deleteDish);



module.exports = route;