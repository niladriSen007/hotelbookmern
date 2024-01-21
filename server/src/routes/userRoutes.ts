import express from "express"
import { registerUser } from "../controllers/userController"

const router = express.Router()

router.post("/auth/v1/register",registerUser)

export default router


