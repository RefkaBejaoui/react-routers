//Every movie should have the following attributes: title, description, posterURL, rating
import MovieCard from "./MovieCard";

const MovieList = ({ List, title, rating }) => {
  return (
    <div>
      {List.filter((f) => f.title.toLowerCase().includes(title.toLowerCase()))
        .filter((f) => f.rating >= rating)
        .map((L, index) => (
          <MovieCard key={index} {...L} />
        ))}
    </div>
  );
};

export default MovieList;
