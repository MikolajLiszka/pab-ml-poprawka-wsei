import mongoose from "mongoose";
const {Schema} = mongoose;
import { Employee } from './employee-model';
import { Dish } from './dish-model';
import { Table } from "./table-model";

const orderSchema = new Schema ({
    employee: {
        // type: String,
        // required: true
        type: mongoose.Types.ObjectId,
        ref: "Employee",
    },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: "Dish",
    }],
    status: {
        type: String,
        required: true
    },
    reservation: {
        type: mongoose.Types.ObjectId,
        ref: "Reservation",
        // type: String,
    },
    price: {
        type: Number,
        required: true// tu jakaśoperacja arytmetyczna
    }
});

export const Order = mongoose.model('Order', orderSchema)