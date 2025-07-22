import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    verificationToken :{type: String,unique: true},
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);

const Api_keys = new mongoose.Schema({
    key: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const API = mongoose.model("API", Api_keys);

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});
const Book = mongoose.model("Book", bookSchema);

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});
const Review = mongoose.model("Review", reviewSchema);

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});
const Order =mongoose.model("Order", orderSchema);

const schema =  { User,API, Book, Review, Order };
export default schema;

