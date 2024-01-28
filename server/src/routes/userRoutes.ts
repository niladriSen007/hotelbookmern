import express from "express"
import { loginUser, registerUser, validateToken } from "../controllers/userController"
import { verifyAuthorization } from "../middlewares/verifyToken"

const router = express.Router()

router.post("/v1/register",registerUser)
router.post("/v1/login",loginUser)
router.get("/v1/validateToken",verifyAuthorization,validateToken)
router.post("/v1/logout",verifyAuthorization,validateToken)

export default router


