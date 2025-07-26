import express from "express";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";
import { addReview, listReviews ,deleteReview  } from "../controllers/review.controllers.js";
const Review = express.Router();

Review.post("/books/:bookId/review", isLoggedIn, addReview);
Review.get("/books/:bookId/reviews", isLoggedIn, listReviews);
Review.delete("/reviews/:id",isLoggedIn,deleteReview );

export default Review;
