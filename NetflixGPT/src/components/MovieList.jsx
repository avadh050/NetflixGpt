
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {

  if (!movie || !Array.isArray(movie)) {
    // console.error("movies is null, undefined, or not an array:", movie);
    return <div className="text-center text-gray-500">No movies available</div>;
  }

  return (
    <div className="relative  bg-transparent ">
      <div className="mb-6 py-2 text-white">
        <h1 className="text-2xl font-bold ">{title}</h1>
      </div>
      <div 
        className="flex overflow-x-auto space-x-6 scrollbar-hide"
      >
        {movie.map((movie) => (
          <MovieCard key={movie.id} backdrop_path={movie.backdrop_path} />
        ))}
      </div> 
    </div>
  );
};

export default MovieList;
