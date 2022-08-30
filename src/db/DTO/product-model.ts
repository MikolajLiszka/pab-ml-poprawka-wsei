import mongoose from "mongoose";
const {Schema} = mongoose;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

export const Product = mongoose.model('Product', productSchema);

module.exports = Product;