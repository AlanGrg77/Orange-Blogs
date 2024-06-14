import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/orange.png";
import { AuthContext } from "../context/authContex";
import AppSearch from "./AppSearch";

const Navbar = () => {
  const Category = [
    {
      id: 1,
      type: "ART",
      link: "/?cat=art",
    },
    {
      id: 2,
      type: "SCIENCE",
      link: "/?cat=science",
    },
    {
      id: 3,
      type: "FOOD",
      link: "/?cat=food",
    },
    {
      id: 4,
      type: "HEALTH",
      link: "/?cat=health",
    },
    {
      id: 5,
      type: "FOOTBALL",
      link: "/?cat=football",
    },
    {
      id: 6,
      type: "ANIME",
      link: "/?cat=Anime",
    },
  ];

  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
            <h3>Orange Blogs</h3>
          </Link>
        </div>
        <div className="search">
          <AppSearch />
        </div>

        <div className="links">
          {Category.map((cat) => {
            return (
              <NavLink  key={cat.id} to={cat.link}>
                <h6>{cat.type}</h6>
              </NavLink>
            );
          })}
          <span style={{color:"red",fontSize: "18px"}}>{currentUser ?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
