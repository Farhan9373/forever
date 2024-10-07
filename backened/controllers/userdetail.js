import { User } from "../modal/user.js"

export const userdetail=async(req,res)=>{
    try {
        console.log("userid",req.userId)
        const user= await User.findById(req.userId)
        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })
        console.log("user",user)
        
    } catch (error) {
        res.status(400).json({
            messsage:error.messsage||error,
            success:false
            
        })
    }
}