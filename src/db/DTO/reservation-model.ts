import mongoose from "mongoose";
const {Schema} = mongoose;
import { Table } from "./table-model";

const reservationSchema = new Schema({
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
    start: {
      type: Date,
      default: Date.now(),
    },
    end: {
      type: Date,
      default: Date.now(),
    },
    client: {
      type: String,
    },
    order: {
      type: mongoose.Types.ObjectId,
      ref: "Order",
    }
  });

export const Reservation = mongoose.model('Reservation', reservationSchema)


