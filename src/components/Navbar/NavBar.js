import React from 'react';
import "./Navbar.css";
import searchSvg from '../../assets/icons/search.svg';
import notifSvg from '../../assets/icons/notif-bell.svg';
import profileSvg from '../../assets/icons/profile.svg';
import logoSvg from '../../assets/icons/logo.svg';
import { ReactSVG } from 'react-svg';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <ReactSVG src={logoSvg} />
        </div>
        <ul className="menu">
          <li>Movies</li>
          <li>TV Shows</li>
          <li>Genres</li>
          <li>My List</li>
        </ul>
        <ul className="action-buttons">
          <li className="action-buttons-svg">
            <ReactSVG src={searchSvg} />
          </li>
          <li className="action-buttons-svg">
            <ReactSVG src={notifSvg} />
          </li>
          <li className="action-buttons-svg">
            <ReactSVG src={profileSvg} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar