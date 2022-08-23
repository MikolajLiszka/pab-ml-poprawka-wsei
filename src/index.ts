import express from 'express'
import {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get('/restaurant', function (req: Request, res: Response) {
  res.send('GET restaurant')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) 
  res.status(200).send('POST restaurant')
})

app.listen(3000)