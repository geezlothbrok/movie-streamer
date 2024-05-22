import React from 'react';
import ReactDOM from 'react-dom';
import "./Loader.css";

function Loader() {
  return ReactDOM.createPortal(
    <div className='wrapper'>
      <div className="loader"></div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader;