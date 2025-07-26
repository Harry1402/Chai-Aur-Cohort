
import schema from "../models/schema.js";
const { Review, User } = schema;

export const addReview = async (req, res) => {
    try {
        const { bookId } = req.params;
        const { userId, rating, comment } = req.body;

        if (!userId || !rating) {
            return res.status(400).json({ message: "userId and rating are required" });
        }

        const review = new Review({
            bookId,
            userId,
            rating,
            comment
        });

        const savedReview = await review.save();

        res.status(201).json({
            message: "Review added successfully",
            review: savedReview
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const listReviews = async (req, res) => {
    try {
        const { bookId } = req.params;

        const reviews = await Review.find({ bookId })
            .populate("userId", "name") // optional: show reviewer name
            .sort({ createdAt: -1 });

        res.status(200).json({ reviews });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const userId = req.user.id;


        const review = await Review.findById(reviewId);

        console.log("Review found:", review);

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        console.log("Review userId:", review.userId.toString());
        console.log("Request userId:", userId.toString());

        if (!review || !review.userId || !review.userId.equals(userId)) {
            return res.status(403).json({ message: "You can delete only your own review." });
        }


        await review.deleteOne();

        res.status(200).json({ message: "Review deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
