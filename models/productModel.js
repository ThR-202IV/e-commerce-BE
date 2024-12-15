import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  bestseller: {
    type: Boolean,
  },
  date: {
    type: Number,
    required: true,
  },
});

/* if the model is already available it will use the existing  product model, otherwise it will use the productSchema and create a new product model */
const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
