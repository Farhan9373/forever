import { uploadProductPermission } from "../helpers/permisson.js";
import { Product } from "../modal/product.js";

export const UploadProductController=async(req,res)=>{
    try {
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
    
        const saveProduct = await Product.create(req.body);

        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })
    } catch (error) {
        res.status(400).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}