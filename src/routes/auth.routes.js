import express, { Router } from "express";
import { userRegister } from "../controllers/auth.controller.js";
import { userLogin } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = Router()

authRouter.post('/register',userRegister)
authRouter.post('/login',userLogin)


export {authRouter}