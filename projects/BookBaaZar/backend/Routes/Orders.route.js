import express from "express";
import { placeOrder, getUserOrders,getOrderDetails } from "../controllers/Order.controllers.js";
import { isLoggedIn }from "../middlewares/auth.middlewares.js";

const Orders = express.Router();

Orders.post("/placeorders",isLoggedIn, placeOrder)
Orders.get("/Userorders",isLoggedIn, getUserOrders)
Orders.get("/orders/:id",isLoggedIn, getOrderDetails)

export default Orders;
