import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/">
          <img src={rigoImage} className="logo" />
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <button 
              className="btn btn-primary nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              favorites
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {store.favorites.map((fav, i) => {
                return <li key={i}>{fav.name}<i className="fas fa-trash-alt m-2" onClick={()=>actions.deleteFav(fav)}></i></li>;
              })}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
