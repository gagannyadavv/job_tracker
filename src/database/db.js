import mongoose from "mongoose";

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb connected succesfully!!");
        
    } catch (error) {
        console.log(error);
        console.log("Error while connecting database!!");
        process.exit(1)
        
    }
}

export {connectDb}