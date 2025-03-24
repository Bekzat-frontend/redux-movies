import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, deleteMovie, toggleFavorite } from "../store/movieSlice";

const MovieList = () => {
  const { movies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleToggleFavorite = (id, isFavorite) => {
    dispatch(toggleFavorite({ id, isFavorite }));
  };

  return (
    <div>
      {movies.map(({ id, title, rating, image, isFavorite }) => (
        <div key={id}>
          <h1>Title: {title}</h1>
          <h3>Rating: {rating} </h3>
          <img src={image} alt={title} />
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={() => handleToggleFavorite(id, isFavorite)}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
