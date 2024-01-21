import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./database/connection";
import userRouter from "./routes/userRoutes"

const app = express();

connectDB();


// app.use((req,res,next)=>{
//   res.setHeader(
//     'Content-Security-Policy',
//     "def"
//   )
// })
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
