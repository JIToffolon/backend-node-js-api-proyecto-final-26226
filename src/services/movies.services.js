import { getAllMovies, getMovieById, createMovie, deleteMovie } from "../models/movies.model.js";

export const listMovies = async () => {
    return await getAllMovies();
}

export const findMovie = async (id) => {
    return await getMovieById(id);
}

export const addMovie = async (data) =>{
    return await createMovie(data);
}

export const removeMovie = async (id) => {
  return await deleteMovie(id);
};