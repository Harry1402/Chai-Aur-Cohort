import express from "express";
import { addBooks, getBookById ,getAllBooks,updateBook ,deleteBookByID} from "../controllers/Book.controllers.js";
const Books = express.Router();
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

Books.post("/addBook", isLoggedIn, addBooks);
Books.get("/booksbyid/:id", isLoggedIn,  getBookById);
Books.get("/Allbooks", isLoggedIn,  getAllBooks);
Books.put("/Updatebook/:id", isLoggedIn, updateBook);
Books.delete("/deletebook/:id",isLoggedIn, deleteBookByID);

export default Books;