import mongoose from "mongoose";
// import mongoPagination from 'mongo-cursor-pagination'
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

// productSchema.plugin(mongoPagination.mongoosePlugin);

export const Product = mongoose.model('Product', productSchema);