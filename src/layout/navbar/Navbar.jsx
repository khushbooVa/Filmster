import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RouterPathName } from "../../routes/config";
import { logout } from "../../redux/slices/login-slice/LoginSlice";
import { clearWatchlist } from "../../redux/slices/search-movie/WatchListSlice";
import icon from "../../../public/movie.jpg";
const Navbar = () => {
  const dispatch = useDispatch();
  const { watchlist } = useSelector((state) => state.watchlist);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name } = useSelector((state) => state.login);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearWatchlist());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary p-4">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={icon} alt="logo" className="rounded nav_logo" />
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          {" "}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              to={RouterPathName.home}
              className={({ isActive }) =>
                isActive
                  ? "nav-link fw-bold text-warning"
                  : "nav-link fw-bold text-white "
              }
            >
              Home
            </NavLink>

            <NavLink
              to={RouterPathName.watchList}
              className={({ isActive }) =>
                isActive
                  ? "nav-link fw-bold text-warning "
                  : "nav-link fw-bold text-white"
              }
            >
              WatchList{" "}
              <span className="text-bg-dark rounded-circle px-1">
                {watchlist.length || 0}
              </span>
            </NavLink>
          </ul>
          {/* User Profile and Logout */}
          <div className="d-flex align-items-center">
            <div className="me-3 text-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <p className="mb-0">{name || "Guest"}</p>
            </div>
            <Link
              to={RouterPathName?.login}
              onClick={handleLogout}
              className="btn btn-light"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
