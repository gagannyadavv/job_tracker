import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    company:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["APPLIED","INTERVIEW","REJECTED","OFFER"],
        required:true
    },
    appliedDate:{
        type:Date,
        default:Date.now()
    },
    resumeUrl: {
        type: String,
        
    },
    reminderDate:{
        type:Date,
        required:true
    }
},{timestamps:true})


const jobModel = mongoose.model("jobModel",jobSchema)



export {jobModel}