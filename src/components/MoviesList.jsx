import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="  py-2 px-4 movie">
      <h1 className="  mb-3 text-white text-2xl font-bold">{title}</h1>
      <div className=" flex overflow-x-scroll scroll-smooth ">
        <div className=" flex gap-2   ">
          {movies.map((video) => (
            <MovieCard
              key={video.id}
              ID={video.id}
              posterPath={video.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
