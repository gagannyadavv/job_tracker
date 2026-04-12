import express, { response } from "express";
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

async function authMiddleware(req,res,next){
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1]
    if(!token){
        res.status(400).json({message:"Token missing!!"})
    }
    try {
        const decoded = await jwt.verify(token , process.env.JWT_SECRET)
        req.user = {id:decoded.id}
    } catch (error) {
        console.log(error);
        return res.status(403).json({message:"Bad request!!"})   
    }
    next()
    
}



export {authMiddleware}