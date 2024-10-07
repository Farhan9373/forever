import { Product } from "../modal/product.js";
// getting category wise only one product
export const getCategoryProduct = async (req, res) => {
    try {
        // Get distinct categories
        const productCategory = await Product.distinct("category");
        console.log("Categories:", productCategory);

        // Create an array to hold one product per category
        const productByCategory = [];

        // Fetch one product per category
        for (const category of productCategory) {
            const product = await Product.findOne({ category }); // Fetch product for the category
            if (product) {
                productByCategory.push(product); // Add product to the array
            }
        }

        // Send response with products
        res.status(200).json({
            data: productByCategory
        });
    } catch (error) {
        console.error("Error fetching category products:", error);
        res.status(500).json({
            message: "Error fetching category products",
            error
        });
    }
};
