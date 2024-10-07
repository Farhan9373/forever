import { Product } from "../modal/product.js"

export const searchProduct=async(req,res)=>{
    try {
        const query=req.query.q
        const regex=new RegExp(query,"i","g")
        const product=await Product.find({
            "$or":[
                {
                    productName:regex
                },
                {
                    category:regex
                }
            ]
        })
        res.json({
            data:product,
            message:"search Product List",
            error:false,
            success:true
        })
    } catch (error) {
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}