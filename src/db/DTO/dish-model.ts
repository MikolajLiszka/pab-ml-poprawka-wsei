import mongoose from "mongoose";
import { Product } from "./product-model";
const {Schema} = mongoose;

const dishSchema = new Schema ({
    name: {
        type: String,
        reqired: true
    },
    products: {
        type: [Product]
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