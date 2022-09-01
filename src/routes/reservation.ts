import express, { Router } from 'express'
import {Request, Response} from 'express'
const route = express.Router();
const reservationActions = require('../actions/reservation-actions');

route.get('/reservations', reservationActions.getAllReservations);

// route.get('/reservations/:id', reservationActions.getReservation);

route.post('/reservations', reservationActions.saveReservation);

// route.put('/reservations/:id', reservationActions.updateReservation);

// route.delete('/reservations/:id', reservationActions.deleteReservation);


module.exports = route;

