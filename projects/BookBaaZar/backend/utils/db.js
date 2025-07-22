
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const db = ()=>{
    mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongodb Connected"))
.catch((error)=>console.log("Mongodb not connected ,with error",error)
)
}
export default db;