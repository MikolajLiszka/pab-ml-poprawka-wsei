import mongoose from "mongoose";
const {Schema} = mongoose;

const dishSchema = new Schema ({
    name: {
        type: String,
        reqired: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

export const Dish = mongoose.model('Dish', dishSchema)