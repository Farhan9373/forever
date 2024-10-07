import { User } from "../modal/user.js"

export const uploadProductPermission=async(userId)=>{
 const user= await User.findById(userId)
 if(user.role=='ADMIN'){
    return true
 }
 return false
}
