import mongoose from "mongoose";
const {Schema} = mongoose;

const tableSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    pplCount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

export const Table = mongoose.model('Table', tableSchema)