import { Request, Response } from "express";

import { HotelDetails } from "../models/hotelModel";
import { uploadImages } from "../helpers/uploadImages";
import { HotelType } from "../types/hotelType";



export const addHotel = async (req: Request, res: Response) => {

  // console.log(req?.body)

  try {
   

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



export const getAllHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await HotelDetails.find();
    return res.status(200).json({ hotels });
  } catch (error) {
    return res.status(401).json({ error });
  }
};



export const getMyHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await HotelDetails.find({ userId: req?.userId });
    return res.status(200).json({ hotels });
  } catch (error) {
    return res.status(401).json({ error });
  }
}