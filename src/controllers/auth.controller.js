import express from 'express'
import {userModel} from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


async function userRegister(req,res){
try {
        const {name , email,password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({message:"All feilds are required!!"})
        }
        const isExists = await userModel.findOne({
            $or:[
                {email}
            ]
        })
        if(isExists){
            return res.status(409).json({message:"User already exists!!"})
        }
        const hash = await bcrypt.hash(password.toString(),10)
        const user = await userModel.create({
            name,
            email,
            password:hash
        })
        const token = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"3d"})
        res.cookie("token",token)
        res.status(200).json({
            message:"User created succesfully!!",
            user
        })
} catch (error) {
    console.log(error);
    console.log("Error while creating user!!");
    
    
}
}

async function userLogin(req,res){
  try {
      const {email , password} = req.body
      if(!email || !password){
          return res.status(400).json({
              message:"All feilds are required!!"
          })
      }
      const user = await userModel.findOne({
          $or:[
              {email}
          ]
      })
      if(!user){
          return res.status(404).json({
              message:"User does'nt exists!!",
          })
      }
      const isPasswordCorrect = await bcrypt.compare(password.toString(),user.password)
      if(!isPasswordCorrect){
          return res.status(401).json({
              message:"Unauthorized access!!"
          })
      }
      const token = await jwt.sign({id:user._id},process.env.JWT_SECRET)
      res.cookie("token",token)
      res.status(200).json({
          message:"User logged in succesfully!!",
          token
      })
  } catch (error) {
    console.log(error);
    console.log("Error while logging in user!!");
    process.exit(1)
    
    
  }

}


export {userRegister,userLogin}