import express, { Router } from 'express'
import {Request, Response} from 'express'
const route = express.Router();
const orderActions = require('../actions/order-actions');

route.get('/orders', orderActions.getAllOrders);


// route.get('/reservations/:id', reservationActions.getReservation);

route.post('/orders', orderActions.saveOrder);

// route.put('/reservations/:id', reservationActions.updateReservation);

// route.delete('/reservations/:id', reservationActions.deleteReservation);

module.exports = route;