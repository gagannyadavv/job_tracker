import express, { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createJob, deleteJob, getJob, updateJob } from "../controllers/jobs.controller.js";
import { getAllJobs } from "../controllers/jobs.controller.js";
import {upload} from '../middlewares/upload.middleware.js'


const jobRouter = Router()
jobRouter.post('/create',authMiddleware,upload.single('resume'),createJob)
jobRouter.get('/getall',authMiddleware,getAllJobs)
jobRouter.patch('/update/:id',authMiddleware,updateJob)
jobRouter.delete('/delete/:id',authMiddleware,deleteJob)

jobRouter.get('/getjob',authMiddleware,getJob)

export {jobRouter}
  