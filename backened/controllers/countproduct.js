import { Cart } from "../modal/cartProduct.js"

export const countproduct=async(req,res)=>{
    try {
    const userid=req?.userId;
    const count= await Cart.countDocuments({
        userId:userid
    }) 

    res.json({
        data:{
            count
        },
        message:"ok",
        error:false,
        success:true
    })
    } catch (error) {
        res.json({
            message:error.message||error,
            error:false,
            success:false,
        })
    }
}