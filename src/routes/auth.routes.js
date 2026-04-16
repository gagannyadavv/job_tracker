import express, { Router } from "express";
import { userRegister } from "../controllers/auth.controller.js";
import { userLogin } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { sendEmail } from "../utils/sendemail.js";

const authRouter = Router()

authRouter.post('/register',userRegister)
authRouter.post('/login',userLogin)


authRouter.get('/getemail',async (req , res)=>{
    await sendEmail(
        "excelanalyst.2@gmail.com",
        "yadavgagan530418@gmail.com",
        "Hello this is a test email!!"
    )
    res.send("Email sent!!")
})


export {authRouter}