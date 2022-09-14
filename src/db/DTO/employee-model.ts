import mongoose from "mongoose";
const { Schema } = mongoose;

const employeeSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: "Order",
    }
});

export const Employee = mongoose.model('Employee', employeeSchema)