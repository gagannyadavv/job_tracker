import express from "express";
import {authMiddleware} from '../middlewares/auth.middleware.js'
import {jobModel} from '../models/job.model.js'

async function createJob(req,res){
   
    try {
        const {company , role , status , appliedDate , reminderDate} = req.body
        const userId = req.user.id
        if(!company || !role || !status ||!appliedDate ||!reminderDate){
            return res.status(400).json({message:"All feilds are required!!"})
        }
        const existingJob = await jobModel.findOne({userId , company , role})
        if(existingJob){
            return res.status(409).json({message:"Job already exists!!"})
        }
        const job = await jobModel.create({
            userId:userId,
            company,
            role,
            status,
            appliedDate,
            reminderDate
    
        })
        res.status(200).json({
            message:"Job created Succesfully!!",
            job
        })
    } catch (error) {
        console.log(error);
        console.log("Error while creating job!!");
        process.exit(1)
    }
}

async function getAllJobs(req,res){
    try {
        const userId = req.user.id
        const jobs = await jobModel.find({userId})
        if(!jobs){
            return res.status(404).json({message:"No jobs found!!"})
        }
        res.status(200).json({
            message:"All jobs fetched succesfully!!",
            jobs
        })
    } catch (error) {
        console.log(error);
        console.log("Error while getting all jobs!!");
        process.exit(1)
        
    }
}

async function updateJob(req,res){
    try {
        const {id} = req.params
        const job = await jobModel.findOne({_id:id})
        if(!job){
            return res.status(404).json({message:"No job found with this id!!"})
        }
        if(job.userId.toString() !== req.user.id){
            return res.status(401).json({
                message:"Unauthorized access!!"
            })
        }
        const update = await jobModel.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        res.status(200).json({
            message:"Job updated Succesfully!!",
            update
        })
    } catch (error) {
        console.log(error);
        console.log("Error while updating the job!");
        process.exit(1)
    }

}

async function deleteJob(req,res){
    try {
        const {id} = req.params
        const job = await jobModel.findOne({_id:id})
        if(!job){
            return res.status(404).json({message:"No jobs found with this id!!"})
        }
        if(job.userId.toString() !== req.user.id){
            return res.status(401).json({
                message:"Unauthorized access!!"
            })
        }
        await jobModel.findByIdAndDelete(id)
        res.status(200).json({
            message:"Job deleted succesfully!!"
        })
    } catch (error) {
        console.log(error);
        console.log("Error while deleting job");
        process.exit(1)
    }
}


async function getJob(req,res){
    const {status , search , page , limit ,sort} = req.query
    const queryObject = {
        userId :req.user.id
    }
    if(status){
        queryObject.status = status
    }
    if(search){
        queryObject.company = {
            $regex:search,
            $options:'i'
        }
    }
    let result = jobModel.find(queryObject)
    if(sort === 'oldest'){
        result = result.sort('createdAt')
    }else{
        result = result.sort('-createdAt')
    }
    const pageNumber = Number(page)
    const limitNumber = Number(limit)
    const skip = (pageNumber-1)*limitNumber
    result = result.skip(skip).limit(limitNumber)
    const jobs = await result
    const totalJobs = await jobModel.countDocuments(queryObject)
    const numOfPages = Math.ceil(totalJobs/limitNumber)
    
    res.status(200).json({
        totalJobs,
        numOfPages,
        currentPage:pageNumber,
        jobs
    })
}

export {createJob,getAllJobs,updateJob,deleteJob,getJob}
