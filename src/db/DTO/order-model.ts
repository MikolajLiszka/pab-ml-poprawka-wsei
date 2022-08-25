import mongoose from "mongoose";
const {Schema} = mongoose;
import { Employee } from './employee-model';
import { Dish } from './dish-model';
import { Table } from "./table-model";

const orderSchema = new Schema ({
    employee: {
        type: Employee,
        required: true
    },
    dishes: {
        type: Dish,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    table: {
        type: Table,
        required: true
    },
    price: {
        type: String,
        required: true// tu jakaśoperacja arytmetyczna
    }
});

export const Order = mongoose.model('Order', orderSchema)