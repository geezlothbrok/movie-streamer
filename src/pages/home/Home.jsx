import React, { useState } from 'react';
import "./Home.css";
import Navbar from '../../components/navigation/NavBar';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSeeMovie = () => {
    setIsLoading(true);
    navigate("/movies")
  }
  
  return (
    <>
    { isLoading && <Loader /> }
     <div className="home-container" >
       <Navbar className="navigation" />

        <div className="home-content" >
          <h2 className="bigger-text">
            unlimited movies, Tv shows and more for  <span className="free-text">free</span>
          </h2>
          <p className="description">watch anywhere, at anytime.</p>
          <button type="button" onClick={handleSeeMovie}>see movies</button>
        </div>
     </div>
     </>
  )
}

export default Home
