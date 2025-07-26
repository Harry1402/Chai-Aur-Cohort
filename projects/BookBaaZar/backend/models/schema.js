import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    verificationToken :{type: String,unique: true},
    createdAt: { type: Date, default: Date.now },
    apiKey: {
    type: String,
    default: null,
  },
});

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author:  { type: String,},
  price: { type: Number}  ,
  description: {type:String},
  category: { type: String },
  stock:  { type :Number},
  imageUrl: {type: String},
  createdAt: { type: Date, default: Date.now }
});

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"  ,required: true},
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      quantity: Number,
      price: Number
    }
  ],
  
  shippingAddress: {
    city: {type: String, required: true},
    zip: {type: String, required: true},
    street: {type: String, required: true},
  },
  
  totalAmount: Number,
  status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);
const Order =mongoose.model("Order", orderSchema);
const Review = mongoose.model("Review", reviewSchema);
const Book = mongoose.model("Book", bookSchema);

const schema =  { User, Book, Review, Order };
export default schema;

