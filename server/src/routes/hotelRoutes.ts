import express from "express"
import { verifyAuthorization } from "../middlewares/verifyToken"
import { addHotel } from "../controllers/hotelController"


const router = express.Router()

router.post("/v1/addHotel",verifyAuthorization,addHotel)

export default router