import mongoose from "mongoose";
const {Schema} = mongoose;
import { Employee } from './employee-model';
import { Dish } from './dish-model';
import { Table } from "./table-model";

const orderSchema = new Schema ({
    employee: {
        type: String,
        required: true
    },
    dishes: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    table: {
        type: mongoose.Types.ObjectId,
        ref: "Table",
    },
    price: {
        type: Number,
        required: true// tu jakaśoperacja arytmetyczna
    }
});

export const Order = mongoose.model('Order', orderSchema)