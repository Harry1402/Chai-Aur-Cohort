import express from "express";
import { registerUser ,loginUser ,aboutMe ,generateApiKey } from "../controllers/auth.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";


const authRouts = express.Router();

authRouts.post("/auth/register", registerUser)
authRouts.post("/auth/login", loginUser)
authRouts.post("/auth/api-key",isLoggedIn, generateApiKey)
authRouts.get("/auth/me",isLoggedIn, aboutMe)

export default authRouts ;

