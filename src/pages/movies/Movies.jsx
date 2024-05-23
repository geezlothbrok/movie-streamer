import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import "./Movie.css";
import axios from "axios";
import TrendingMovies from "../../components/categories/trending/TrendingMovies";

function Movies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=92ad5a49698ad28b7f09527b62b6ecf9"
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleClick = () => {};

  return (
    <div className="movie-container">
      
     <Navigation />

     <TrendingMovies />

        <div className="all-movies">
           {movies.map((movie) => (  
            <img key={movie.id}
            onClick={handleClick(movie)}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
           ))}
        </div>
    </div>
  );
}

export default Movies;
