import jwt from "jsonwebtoken"
import "dotenv/config";
import { Response } from "express";
import mongoose from "mongoose";
export const generateJwtToken = async(userId: any,res : Response)=>{
    const token = jwt.sign({id:userId},process.env.JWT_SECRET as string,{
        expiresIn : "3d"
    })

    console.log("Token",token)

    res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      return token;
}