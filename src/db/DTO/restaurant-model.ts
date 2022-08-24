import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new Schema ({name: String, adress: String, phoneNum: Number, nipNum: Number, email: String, website: String})

export const Restaurant = mongoose.model('Restaurant', restaurantSchema) 
//     {name: String,
//     adress: String,
//     phoneNum: Number,
//     nipNum: Number,
//     email: String,
//     website: String
// })


