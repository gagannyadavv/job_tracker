import "dotenv/config";
import CookieParser from 'cookie-parser'
import express from 'express'
import { authRouter } from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import { jobRouter } from './routes/job.routes.js'
import { resumeRouter } from './routes/resume.routes.js'


const app = express()
app.use(express.json())
app.use(cookieParser())


app.use('/api',authRouter)
app.use('/api',jobRouter)
app.use('/api',resumeRouter)


export {app}