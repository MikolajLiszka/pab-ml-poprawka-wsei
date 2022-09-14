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
      required: true,
      default: Date.now(),
    },
    end: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    client: {
      type: String,
    },
  });

export const Reservation = mongoose.model('Reservation', reservationSchema)


