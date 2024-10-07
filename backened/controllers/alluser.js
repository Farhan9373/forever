import { User } from "../modal/user.js"

export const alluser= async(req,res)=>{
   
    try {
        console.log("userid all Users", req.userId); // note the lowercase 'd'


        const allUsers = await User.find()
        
        res.json({
            message: "All users fetched successfully",
            data: allUsers,
            success: true,
            error: false
        });
        console.log(allUsers)
    
    } catch (error) {
        res.status(400).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}