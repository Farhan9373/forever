import { Cart } from "../modal/cartProduct.js"
export const cartview=async(req,res)=>{
    try {
        const currentuser=req.userId
        const allproduct= await Cart.find({userId:currentuser}).populate("productId")
      res.json({
        data:allproduct,
        success:true,
        error:false
      })
    
    } catch (error) {
       res.json({
        message:error.message||error,
        success:false,
        error:true
       }) 
    }
}