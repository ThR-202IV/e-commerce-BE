import userModel from "../models/userModel.js";

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    /* checking if the particular product (itemId) is available in the cart */
    if (cartData[itemId]) {
      /* checking if the product (itemId) with the particular size is available in the cart */
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {}; // if the "if" condition is false, then for this item, we will create an object to add a particular size
      cartData[itemId][size] = 1;
    }

    /* for this userId, we update the latest iteration of the cartData */
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log("error in addToCart controller", error.message);
    res.json({ success: true, message: error.message });
  }
};

// update user cart
const updateToCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log("error in updateToCart controller", error.message);
    res.json({ success: true, message: error.message });
  }
};

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log("error in getUserCart controller", error.message);
    res.json({ success: true, message: error.message });
  }
};

export { addToCart, updateToCart, getUserCart };
