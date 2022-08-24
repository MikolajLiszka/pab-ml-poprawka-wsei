import express from 'express'
import {Request, Response} from 'express'
const route = express.Router();
const testActions = require('../actions/basicAndTestAction');

route.get('/restaurant', testActions.testTH);


// route.post('/restaurant', function (req: Request, res: Response) {
//     console.log(req.body) 
//     res.status(200).send('POST restaurant')
//   })

module.exports = route;

