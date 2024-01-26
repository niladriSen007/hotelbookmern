import express from "express"
import { loginUser, registerUser } from "../controllers/userController"

const router = express.Router()

router.post("/v1/register",registerUser)
router.post("/v1/login",loginUser)

export default router


