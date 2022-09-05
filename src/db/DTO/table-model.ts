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
    taken: {
        type: Boolean,
        default: false
    }
});

export const Table = mongoose.model('Table', tableSchema)