import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new Schema ({
    name: { 
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    phoneNum: {
        type: Number,
        required: true
    },
    nipNum: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
    });

export const Restaurant = mongoose.model('Restaurant', restaurantSchema) 
//     {name: String,
//     adress: String,
//     phoneNum: Number,
//     nipNum: Number,
//     email: String,
//     website: String
// })


