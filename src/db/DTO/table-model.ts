import mongoose from "mongoose";
const {Schema} = mongoose;

const tableSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    pplCount: {
      type: Number,
      required: true,
    },
    reservation: {
      type: mongoose.Types.ObjectId,
      ref: "Reservation",
    },
    order: {
      type: mongoose.Types.ObjectId,
      ref: "Order",
    }
  });

export const Table = mongoose.model('Table', tableSchema)