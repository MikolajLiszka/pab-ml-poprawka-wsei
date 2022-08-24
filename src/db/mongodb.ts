// import {Schema, model, connect} from 'mongoose';
// import { runInContext } from 'vm';

// const url = 'mongodb://127.0.0.1:27017'
// const dbname = 'mongodb-restaurant'

// interface IRestaurant {
//     name: string;
//     adress: string;
//     phoneNum: number;
//     nipNum: number;
//     email: string;
//     website: string;
// }

// const restaurantSchema = new Schema<IRestaurant>({
//     name: {type: String, required: true},
//     adress: {type: String, required: true},
//     phoneNum: {type: Number, required: true},
//     nipNum: {type: Number, required: true},
//     email: {type: String, required: true},
//     website: {type: String, required: true}
// })

// const Restaurant = model <IRestaurant>('Restaurant', restaurantSchema)
// run().catch(err => console.log(err));

// async function run(){
//     await connect(url);

//     const restaurantOne = new Restaurant ({
//         name: 'bimbap',
//         adress: 'kowalska 7',
//         phoneNum: 909090902,
//         nipNum: 5647474,
//         email: 'fhebfe@unfe.pl',
//         website: 'bimbap.pl'
//     });
//     await restaurantOne.save();

//     console.log(restaurantOne.name);
// }

// const mongoose = require ('mongoose');
import mongoose from "mongoose";
// import {Restaurant} from './DTO/restaurant-model'

mongoose.connect('mongodb://127.0.0.1:27017/restaurantDB')

// const Restaurant = mongoose.model('Restaurant',  {
//     name: String,
//     adress: String,
//     phoneNum: Number,
//     nipNum: Number,
//     email: String,
//     website: String
// })

// const newRestaurant = new Restaurant({
//     name: 'bimbap',
//     adress: 'kowalska 7',
//     phoneNum: 909090902,
//     nipNum: 5647474,
//     email: 'fhebfe@unfe.pl',
//     website: 'bimbap.pl'
// })
// newRestaurant.save().then(() => {
//     console.log("restaurant saved")
// });




