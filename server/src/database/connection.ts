import mongoose from "mongoose"
import dotenv from "dotenv" 
dotenv.config()
const DB = process.env.MONGO_URI;
// mongoose.connect(DB).then(()=>console.log("Connection Successful")).catch((e)=>console.log(e));

export const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(DB as string)
        console.log("Connection Successful")
    }
    catch(error){
        console.log(`Server error occured - ${error}`)
    }
}   