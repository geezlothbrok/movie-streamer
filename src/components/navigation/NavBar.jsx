import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";


import "./NavBar.css";


function Navbar() {
    const [search, setSearch] = useState("");
    const [showMenu, setShowMenu] = useState(false);

  const activeTab = ({ isActive }) => (isActive ? "active-tab" : "");

  const toogleMenu = () => {
    setShowMenu(true)
  };

 const hideMenu = () => {
  setShowMenu(false)
 };

  return (
    <>
      <header className="nav-container">
        <nav className="container-width">
          <section className="logo">
          <p className="logo-image">Binge</p>
           <div className="small-circle"></div>
          </section>

          <section className="navs">
            <ul className="nav-lists">
              <li className="nav">
                <NavLink to="/" className={activeTab}>
                  Home
                </NavLink>
              </li>
              <li className="nav">
                <NavLink to="/movies" className={activeTab}>
                  Movies
                </NavLink>
              </li>
              <li className="nav">
                <NavLink to="/tv-shows" className={activeTab}>
                  Tv Shows
                </NavLink>
              </li>
            </ul>
          </section>
          <section className="search">
            <input
              type="search"
              name=""
              id=""
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
             <CiSearch size={15} className="search-icon" />
          </section>

          <section className="register">
            <button type="button" className="sign-up">
              Sign Up
            </button>
          </section>
        </nav>

       <section className="toogle-icons" >

        {showMenu ? (<div className="close">
        <IoIosClose onClick={hideMenu}/>
        </div>) : (<div className="menu">
        <BiMenuAltLeft onClick={toogleMenu}/>
        </div>)}
        

        
       </section>
      </header>

      {/* MOBILE NAV */}
      <header className="nav-mobile-container">
      <nav className= {showMenu ? "mobile-container-width" : "hide-mobile-menu"} onClick={hideMenu}>
          <section className="logo" onClick={hideMenu}>
          <p className="logo-image">Binge</p>
           <div className="small-circle"></div>
          </section>

          <section className="mobile-navs">
            <ul className="mobile-nav-lists">
              <li className="mobile-nav">
                <NavLink to="/" >
                  Home
                </NavLink>
              </li>
              <li className="mobile-nav">
                <NavLink to="/movies" >
                  Movies
                </NavLink>
              </li>
              <li className="mobile-nav">
                <NavLink to="/tv-shows" >
                  Tv Shows
                </NavLink>
              </li>
            </ul>
          </section>
          <section className="mobile-search">
            <input
              type="search"
              name=""
              id=""
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
             <CiSearch size={15} className="mobile-search-icon" />
          </section>

          <section className="mobile-register">
              <Link>Sign Up</Link>
          </section>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
