import { Cart } from "../modal/cartProduct.js";

export const addtocart = async (req, res) => {
  try {
    const { productId } = req.body; // Optional chaining on req.body is unnecessary
    const currentuser = req.userId;

    // Check if the product is already in the user's cart
    const isProductAvail = await Cart.findOne({ productId, userId: currentuser });
    if (isProductAvail) {
      return res.status(400).json({
        message: "Item already in cart",
        success: false, // Should be false as it's an error condition
        error: true,
      });
    }

    // Add product to cart
    const cart = await Cart.create({
      productId: productId,
      quantity: 1,
      userId: currentuser,
    });

    return res.status(201).json({
      message: "Item added to cart successfully",
      success: true,
      error: false,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
      error: true,
      success: false,
    });
  }
};
