import express, { Router } from 'express'
import {Request, Response} from 'express'
const route = express.Router();
const restaurantActions = require('../actions/restaurant-actions');

route.get('/restaurants', restaurantActions.getAllRestaurants);

route.get('/restaurants/:id', restaurantActions.getRestaurant);

route.post('/restaurants', restaurantActions.saveRestaurant);

route.put('/restaurants/:id', restaurantActions.updateRestaurant);

route.delete('/restaurants/:id', restaurantActions.deleteRestaurant);


// route.post('/restaurant', function (req: Request, res: Response) {
//     console.log(req.body) 
//     res.status(200).send('POST restaurant')
//   })

module.exports = route;

