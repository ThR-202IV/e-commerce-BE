import { v2 as cloudinary } from "cloudinary";

import productModel from "../models/productModel.js";

/* to add a product */
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    /* image1 is an array so from that array we get the first element */
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    /* we check if the image is not undefined and only then we store it in this array i.e., images */
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    /* the images are stored first in cloudinary and then we get urls for each stored image, which will all be then stored in this array */
    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url; // from the returned result, we will get a secure_url property, this we then save in this imagesUrl array
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price), // 'cause price is initially a string that comes from the req.body, we must convert it into a number before storing it into our db
      subCategory,
      bestseller: bestseller === "true" ? true : false, // 'cause bestseller is initially a string like 'true' or 'false' that comes from the req.body, we must convert it into a boolean before storing it into our db
      sizes: JSON.parse(sizes), // when receiving data from a web server, the data is always a string, so, we parse the data with JSON.parse(), and the data becomes a JavaScript object.
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    console.log(product);
    await product.save();

    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log("error from addProduct controller", error);
    res.json({ success: false, message: error.message });
  }
};

/* to list products */
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log("error from listProducts controller", error);
    res.json({ success: false, message: error.message });
  }
};

/* to remove a product */
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log("error from removeProduct controller", error);
    res.json({ success: false, message: error.message });
  }
};

/* single product info */
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log("error from singleProduct controller", error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
