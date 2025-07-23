
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import express from "express";
const app = express();
app.use(cookieParser()); // Add this line


export const isLoggedIn = async (req, res, next) => {
  try {


    const token = req.cookies?.token;
    console.log("Setting cookie with token:", token);
    console.log("Token Found: ", token ? "YES" : "NO");

    if (!token) {
      console.log("NO token");
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("decoded data: ", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Auth middleware failure");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
