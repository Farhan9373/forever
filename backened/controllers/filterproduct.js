import { Product } from "../modal/product.js";
export const filterProductController = async (req, res) => {
    try {
      const categoryList = req.body?.category;  // Match the frontend field name
      const product = await Product.find({
        category: {
          "$in": categoryList
        }
      });
  
      res.json({
        data: product,
        message: "product",
        error: false,
        success: true
      });
    } catch (error) {
      res.json({
        message: error.message || error,
        error: true,
        success: false
      });
    }
  };
  