import mongoose from "mongoose";

async function ConnectDB (){
    try {
        mongoose.connect(process.env.MONGODB_URL)

    }   
    catch (error) {
        console.log(error);
        
    }
}
export default ConnectDB