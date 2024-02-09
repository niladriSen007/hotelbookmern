import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
      interface Request {
        userId: string;
      }
    }
  }

export const verifyAuthorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["auth_token"];
    if (!token) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const user = jwt.verify(token,process.env.JWT_SECRET as string)
    console.log(user)
    req.userId = (user as JwtPayload).id;
    next()
  } catch (error) {
    return res.status(500).json({ error });
  }
};
