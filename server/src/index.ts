import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import "dotenv/config";
import { connectDB } from "./database/connection";
import userRouter from "./routes/userRoutes"
import hotelRouter from "./routes/hotelRoutes"
import { v2 as cloudinary } from "cloudinary"


const app = express();

connectDB();

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API,
  api_secret:process.env.CLOUDINARY_API_SECRET
})


// app.use((req,res,next)=>{
//   res.setHeader(
//     'Content-Security-Policy',
//     "def"
//   )
// })
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}));
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",userRouter)
app.use("/api/hotel",hotelRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
