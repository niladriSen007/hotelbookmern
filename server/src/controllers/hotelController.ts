import { Request, Response } from "express";
import { body } from "express-validator";
import multer from "multer";
import cloudinary from "cloudinary";
import { HotelDetails } from "../models/hotelModel";
import { uploadImages } from "../helpers/uploadImages";
import { HotelType } from "../types/hotelType";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const addHotel = async (req: Request, res: Response) => {
  try {
    body("name").notEmpty().withMessage("Name is Required"),
      body("city").notEmpty().withMessage("City is required"),
      body("country").notEmpty().withMessage("Country is required"),
      body("description").notEmpty().withMessage("Description is required"),
      body("type").notEmpty().withMessage("Hotel type is required"),
      body("pricePerNight")
        .notEmpty()
        .isNumeric()
        .withMessage("Price per night is required and must be a number"),
      body("facilities")
        .notEmpty()
        .isArray()
        .withMessage("Facilities are required"),
    upload.array("imageFiles", 6);
    const imgFiles = req?.files as Express.Multer.File[];
    const newHotel: HotelType = req.body;

    const imageURLs = await uploadImages(imgFiles);

    newHotel.imageUrls = imageURLs;
    newHotel.lastUpdated = new Date();
    newHotel.userId = req?.userId;

    const createdHotel = new HotelDetails(newHotel);
    await createdHotel.save();

    return res.status(201).json({ hotel: createdHotel });
  } catch (error) {
    return res.status(401).json({ error });
  }
};
