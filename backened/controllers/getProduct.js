import { Product } from "../modal/product.js";

export const getproduct = async (req, res) => {
  try {
    const allproduct = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "All product",
      success: true,
      error: false,
      data: allproduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
