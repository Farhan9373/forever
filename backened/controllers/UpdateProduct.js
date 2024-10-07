import { uploadProductPermission } from "../helpers/permisson.js"
import { Product } from "../modal/product.js"

export const updateProduct=async(req,res)=>{
    try{

        if(!uploadProductPermission(req.userId)){
            throw new Error("Permission denied")
        }

        const { _id, ...resBody} = req.body

        const updateProduct = await Product.findByIdAndUpdate(_id, resBody, { new: true });
        res.json({
            message : "Product update successfully",
            data : updateProduct,
            success : true,
            error : false
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

