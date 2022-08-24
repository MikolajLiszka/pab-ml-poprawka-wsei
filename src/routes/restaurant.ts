import express from 'express'
import {Request, Response} from 'express'
const route = express.Router();

route.get('/restaurant', function (req: Request, res: Response) {
    res.send('GET restaurant')
  })
route.post('/restaurant', function (req: Request, res: Response) {
    console.log(req.body) 
    res.status(200).send('POST restaurant')
  })

  module.exports = route;

