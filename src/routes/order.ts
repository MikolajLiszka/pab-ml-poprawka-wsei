import express, { Router } from 'express'
import {Request, Response} from 'express'
const route = express.Router();
const orderActions = require('../actions/order-actions');

route.get('/orders', orderActions.getAllOrders);

route.get('/orders/:id', orderActions.getOrder);

route.get('/readyOrders', orderActions.getReadyOrders);

route.get('/notReadyOrders', orderActions.getNotReadyOrders);

route.post('/orders', orderActions.saveOrder);

route.put('/orders/:id', orderActions.updateOrder);

route.delete('/orders/:id', orderActions.deleteOrder);

module.exports = route;