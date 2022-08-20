import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import searchSvg from '../../assets/icons/search.svg';
import notifSvg from '../../assets/icons/notif-bell.svg';
import profileSvg from '../../assets/icons/profile.svg';
import logoSvg from '../../assets/icons/logo.svg';
import { ReactSVG } from 'react-svg';
import axios from "axios";

function NavBar() {
  const [genreList, setGenreList] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  function showDropdown() {
    axios.get("{URL_HOST}/api/v1/genres", {
      headers: {
        "Authorization": "API KEY"
      }
    }).then(response => {
      setGenreList(response.data.data);
      setDropdown(true);
      console.log(genreList)
    })
  }

  function hideDropdown() {
    setDropdown(false);
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <ReactSVG src={logoSvg} />
        </div>
        <ul className="menu">
          <li>
            <button>Movies</button>
          </li>
          <li>
            <button>TV Shows</button>
          </li>
          <li>
            <button>My List</button>
          </li>
          <li onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <button>Genres</button>
            {dropdown &&
              <div className="genre-dropdown">
                <div className='genre-content'>
                {
                  genreList.map(element => {
                    return <a href="#">{element.name}</a>
                  })
                }
                </div>
              </div>}
          </li>
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
