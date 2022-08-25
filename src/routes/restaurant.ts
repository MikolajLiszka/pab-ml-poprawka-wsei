import express, { Router } from 'express'
import {Request, Response} from 'express'
const route = express.Router();
const testActions = require('../actions/basicAndTestAction');

route.get('/restaurants', testActions.getAllRestaurants);

route.get('/restaurants/:id', testActions.getRestaurant);

route.post('/restaurants', testActions.saveRestaurant);

route.put('/restaurants/:id', testActions.updateRestaurant);

route.delete('/restaurants/:id', testActions.deleteRestaurant);


// route.post('/restaurant', function (req: Request, res: Response) {
//     console.log(req.body) 
//     res.status(200).send('POST restaurant')
//   })

module.exports = route;

