import express, { Router } from 'express'
import {Request, Response} from 'express'
const router = express.Router();
const tableActions = require('../actions/table-actions');

router.get('/tables', tableActions.getAllTables);

router.get('/tables/:id', tableActions.getTable);

router.get('/reserved', tableActions.getAllReservedTables);

// router.get('/taken', tableActions.getAllTakenTables);

router.post('/tables', tableActions.saveTable);

router.put('/tables/:id', tableActions.updateTable);

router.delete('/tables/:id', tableActions.deleteTable);


// route.post('/restaurant', function (req: Request, res: Response) {
//     console.log(req.body) 
//     res.status(200).send('POST restaurant')
//   })

module.exports = router;
