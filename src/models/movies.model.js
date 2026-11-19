import {
    collection,
    addDoc,
    getDoc,
    getDocs,
    doc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const moviesCollection = collection(db, "movies");

export const getAllMovies = async () => {
    const moviesSnapshot = await getDocs(moviesCollection);
    const movies = moviesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return movies;

};

export const getMovieById = async (id) => {
    const reference = doc(db, "movies", id)
    const movieSnapshot = await getDoc(reference);

    if (!movieSnapshot.exists()) {
        return null;
    }

    return {
        id: movieSnapshot.id,
        ...movieSnapshot.data(),
    };
}

export const createMovie = async (data) => {
    const reference = await addDoc(moviesCollection, data);
    return {
        ...data,
        id: reference.id,
    }
};

export const deleteMovie = async (id) => {
  const reference = doc(db, "movies", id);

  const snapshot = await getDoc(reference);

  if (!snapshot.exists()) {
    return null;
  }

  await deleteDoc(reference);

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
};