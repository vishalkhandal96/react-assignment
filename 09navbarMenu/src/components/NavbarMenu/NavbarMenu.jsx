// import React from "react";

import "./NavbarMenu.css";
import logo_light from "../../assets/images/logo-black.png";
import logo_dark from "../../assets/images/logo-white.png";
import search_icon_light from "../../assets/images/search-w.png";
import search_icon_dark from "../../assets/images/search-b.png";
import toggle_light from "../../assets/images/night.png";
import toggle_dark from "../../assets/images/day.png";

const NavbarMenu = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      <div className="navbar">
        <img
          className="logo"
          src={theme == "light" ? logo_light : logo_dark}
          alt=""
          srcset=""
        />
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img
            src={theme == "light" ? search_icon_light : search_icon_dark}
            alt=""
            srcset=""
          />
        </div>
        <img
          onClick={() => {
            toggle_mode();
          }}
          className="toggle-icon"
          src={theme == "light" ? toggle_light : toggle_dark}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavbarMenu;
