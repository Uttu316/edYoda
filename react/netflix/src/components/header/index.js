import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="netflixLogo">
        <a id="logo" href="#home">
          <img
            src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
            alt="Logo Image"
          />
        </a>
      </div>
      <nav className="main-nav">
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
      </nav>
      <nav className="sub-nav">
        <a href="#">
          <FaSearch />
          {/* <i className="fas fa-search sub-nav-logo"></i> */}
        </a>
        <a href="#">
          <i className="fas fa-bell sub-nav-logo"></i>
        </a>
        <a href="#">Account</a>
      </nav>
    </header>
  );
};
export default Header;
