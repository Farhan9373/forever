import { User } from "../modal/user.js"

const UpdateUser = async(req,res)=>{
    try {
        console.log("Request body:", req.body);
        const sessionUser = req.userId

        const{userId,email,name,role}=req.body
        const payload = {
            ...( email && { email : email}),
            ...( name && { name : name}),
            ...( role && { role : role}),
        }
        console.log(role);
        const user = await User.findById(sessionUser)

        console.log("user.role",user.role)


        console.log("user",email);
        const updateUser = await User.findByIdAndUpdate(userId,payload)
        
        res.json({
            data : updateUser,
            message : "User Updated",
            success : true,
            error : false
        })
    } 
    catch (error) {
        res.status(400).json({
            messsage:error.messsage||error,
            success:false
        })
}
}
export default UpdateUser