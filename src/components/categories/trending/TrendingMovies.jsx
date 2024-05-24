import React, { useEffect, useState } from 'react';
import "./TrendingMovies.css"
import axios from 'axios';

function TrendingMovies() {
  const [movieBanner, setMovieBanner] = useState([]);

  const fetchBannerData = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=92ad5a49698ad28b7f09527b62b6ecf9");
    setMovieBanner(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
  };
  console.log(movieBanner);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  };

  useEffect(() => {
    fetchBannerData();
  },[])
  return (
    <header className='banner' 
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/w500${movieBanner?.backdrop_path}")`,
      backgroundPosition: "center",
    }}>
      <div className="banner-contents">
        <h1 className="banner-title">
          {movieBanner?.title || movieBanner?.original_title}
        </h1>
        <p className="release-date">
          Date of Release: {movieBanner?.release_date}
        </p>
        <div className="buttons">
        <div className="banner-button">Play</div>
        <div className="banner-button">My List</div>
        </div>
        <div className="banner-description">
          {truncate(movieBanner?.overview, 150)}
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </header>
  )
}

export default TrendingMovies
