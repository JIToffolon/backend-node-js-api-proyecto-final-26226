import { Router } from "express";
import { getMovies, getMovieById, postMovie, deleteMovieById } from "../controllers/movies.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", verifyToken, postMovie);
router.delete("/:id", verifyToken, deleteMovieById);

export default router;