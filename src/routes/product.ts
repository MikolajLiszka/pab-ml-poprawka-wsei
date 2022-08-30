import express, { Router } from 'express'
import {Request, Response} from 'express'
const route = express.Router();
const productActions = require('../actions/product-actions');

route.get('/products', productActions.getAllProducts);

route.get('/products/:id', productActions.getProduct);

route.post('/products', productActions.saveProduct);

route.put('/products/:id', productActions.updateProduct);

route.delete('/products/:id', productActions.deleteProduct);

module.exports = route;