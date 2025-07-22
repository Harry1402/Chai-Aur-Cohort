import express from "express";
import { registerUser } from "../controllers/auth.controllers.js";


const authRouts = express.Router();

authRouts.post("/auth/register", registerUser)
// authRouts.post("/auth/login", Login)
// authRouts.post("/auth/api-key", API)
// authRouts.get("/auth/me", AboutMe)

export default authRouts ;

