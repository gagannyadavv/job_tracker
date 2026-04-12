import express, { Router } from 'express'
import { upload } from '../middlewares/upload.middleware.js'
import { uploadResume } from '../controllers/resume.controller.js'


const resumeRouter = Router()

resumeRouter.post('/upload',upload.single("file"),uploadResume)


export {resumeRouter}