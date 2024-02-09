import express from "express";
import { verifyAuthorization } from "../middlewares/verifyToken";
import { addHotel, getAllHotels, getMyHotels } from "../controllers/hotelController";
import { body } from "express-validator";
import multer from "multer";
import cloudinary from "cloudinary";
import { get } from "http";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/v1/addHotel",
  verifyAuthorization,
  [
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
  ],
  upload.array("imageFiles", 6),
  addHotel
);


router.get("/v1/getAllHotels", verifyAuthorization, getAllHotels)
router.get("/v1/getMyHotels", verifyAuthorization, getMyHotels)


export default router;
