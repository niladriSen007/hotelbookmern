import { Request, Response } from "express";
import { UserDetails } from "../models/userModel";
import { hashPassword } from "../helpers/hashPassword";
import { generateJwtToken } from "../helpers/createJWTToken";
import { Result, ValidationError, check, validationResult } from "express-validator";
import { comparePassword } from "../helpers/comparePassword";

export const registerUser = async (req: Request, res: Response) => {
  try {

    // console.log(req?.body)
    //Getting user data
    const { name, username, email, password, confirmpassword } = req.body;



    //Checking for valid input
    // if (!name) return res.status(400).json({ error: "Name must be provided" });
    check("name", "Name must be provided").isString();
    // if (!username) return res.status(400).json({ error: "User name must be provided" });
    check("username", "User name must be provided").isString();
    // if (!email) return res.status(400).json({ error: "Email must be provided" });
    check("email", "Email must be provided").isEmail();
    // if (!password) return res.status(400).json({ error: "Password must be provided" });
    check("password", "Password must be provided").isLength({ min: 1 });
    // if (!confirmpassword) return res
    // .status(400)
    // .json({ error: "Confirm Password must be provided" });
    check("confirmpassword", "Confirm Password must be provided").isLength({
      min: 1,
    });


    const errors : Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }



    //Password matching with confirm password or not
    if (password !== confirmpassword)
      return res
        .status(400)
        .json({ error: "Password and Confirm Password must be same" });

    //Cheking user exist or not
    const userExistOrNot = await UserDetails.findOne({ email });

    let newUser;

    const hashedPass = await hashPassword(password);

    //If User exists
    if (userExistOrNot)
      return res.status(400).json({ error: "User already Exists" });
    else {
      newUser = new UserDetails({
        name,
        username,
        email,
        password: hashedPass,
        confirmpassword: hashedPass,
      });
    }
    await newUser.save();

    const token = await generateJwtToken(newUser?._id, res);

    const userWithToken = { ...newUser, token };
    // console.log(userWithToken?._id  ?? "Nothing")

    return res.status(200).json({ message: "User registered successfully!!" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};


export const loginUser = async(req : Request,res:Response) =>{
  try {
    const {email,password} = req.body;

    check("email", "Email must be provided").isEmail();
    check("password", "Password must be provided").isLength({ min: 1 });

    const errors : Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const userExistOrNot = await UserDetails.findOne({ email });

    let passwordMatch;

    if(!userExistOrNot)
        return res.status(500).json({error:"No user exists"})
    else{
      passwordMatch = await comparePassword(password,userExistOrNot?.password as string)
      
    }

    if(!passwordMatch)
      return res.status(400).json({error:"Invalid Credentials"})

    return res.status(200).json({message:"Logged in Successfully"})

  } catch (error) {
    return res.status(500).json({error})
  }
}
