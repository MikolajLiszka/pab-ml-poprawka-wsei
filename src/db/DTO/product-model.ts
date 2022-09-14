import mongoose from "mongoose";
// const mongoPagination = require('mongo-cursor-pagination');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const {Schema} = mongoose;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
    },
    category: {
        type: String,
    },
    dish: {
        type: Schema.Types.ObjectId,
        ref: "Dish",
        // type: String,
    }
});

// productSchema.plugin(mongoPagination.mongoosePlugin);
productSchema.plugin(aggregatePaginate);

export const Product = mongoose.model('Product', productSchema);

