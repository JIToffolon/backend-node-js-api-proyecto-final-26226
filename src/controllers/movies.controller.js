import { listMovies, findMovie, addMovie, removeMovie } from "../services/movies.services.js";

export const getMovies = async (req, res) => {
    try {
        const movies = await listMovies();
        res.json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las peliculas" });
    }
}

export const getMovieById = async (req, res) => {
    try {
        const movie = await findMovie(req.params.id);

        if (!movie) {
            return res.status(404).json({ error: "Pelicula no encontrada" });
        }

        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener la pelicula" });
    }
};

export const postMovie = async (req, res) => {
    try {
        const { title, year } = req.body ?? {};
        if (
            typeof title !== "string" || !title.trim() ||
            typeof year !== "number" || year <= 0
        ) {
            return res.status(400).json({
                error: "Título y año de la pelicula son obligatorios",
            });
        }

        const movie = await addMovie({ title, year });
        res.status(201).json(movie);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al agregar la pelicula",
        })
    }
};


export const deleteMovieById = async (req, res) => {
  try {
    const book = await removeMovie(req.params.id);

    if (!book) {
      return res.status(404).json({
        error: "Pelicula no encontrada",
      });
    }

    res.json({
      message: "Pelicula eliminada correctamente",
      book,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la pelicula",
    });
  }
};