import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import "./Movie.css";
import axios from "axios";
import TrendingMovies from "../../components/categories/trending/TrendingMovies";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // TO GET ALL MOVIES FROM THE API
  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=92ad5a49698ad28b7f09527b62b6ecf9"
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // FUNCTION TO SEARCH FOR MOVIE URL USING THE TITLE ON YOUTUBE AND PLAY IT AS A TRAILER
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_title || movie?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"))
      })
      .catch((error) => console.log(error));
    };
  };

  const opts = {
    // height: "100%",
    // width: "100%",
    playerVars: {
      autoplay: 1
    },
  };

  return (
    <div className="movie-container">
      
     <Navigation />

     <TrendingMovies />
     <div className="trailer-container">
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="trailer-video"/>}
     </div>
        <div className="all-movies">
           {movies.map((movie) => (  
            <img key={movie.id}
            onClick={() => handleClick(movie)}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
           ))} 
           
        </div>
       
    </div>
  );
}

export default Movies;
