import * as mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    src: String,
    description: String,
});

const ProductModel = mongoose.model('Product', ProductSchema);

export { ProductModel };