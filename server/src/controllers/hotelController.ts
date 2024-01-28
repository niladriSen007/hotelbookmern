import { Request, Response } from "express";
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
    upload.array("imageFiles", 6);
    const imgFiles = req?.files as Express.Multer.File[];
    const newHotel : HotelType = req.body;

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
