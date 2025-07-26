
import schema from "../models/schema.js";
import jwt from "jsonwebtoken";
const { Order, User } = schema;

export const placeOrder = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { items, shippingAddress } = req.body;

    // Basic validation
    if (!userId || !items || !shippingAddress) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new order
    const newOrder = new Order({
      userId,
      items,
      shippingAddress
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: savedOrder
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




export const getUserOrders = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const orders = await Order.find({ userId })
      .populate("items.bookId", "title author") // populate book details
      .sort({ createdAt: -1 });

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



export const getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId)
      .populate("items.bookId", "title author price");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


