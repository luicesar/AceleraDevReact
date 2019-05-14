import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import loginService from "../services/loginService";
import { slugify } from "../helpers";

const Navbar = ({ onchangeInput, location, history, searchString }) => {
  const path = location.pathname;
  searchString =
    path.includes("user") || path.includes("recipe")
      ? ""
      : path.slice(1).replace("-", " ");

  return (
    <nav
      className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark"
      onChange={({ target }) => history.push("/" + slugify(target.value))}
    >
      <div className="navbar-brand col-1">
        <img src={logo} className="Navbar-logo" alt="logo" />
      </div>

      <div className="form-group justify-content-center row col-10 my-2">
        <input
          value={searchString}
          onChange={onchangeInput}
          className="form-control col-9 mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      {loginService.isLogged() ? (
        <Link to="/user/profile">
          <button className="btn btn-secondary">
            {loginService.getUser().username}
          </button>
        </Link>
      ) : (
        <Link to="/user/login">
          <button className="btn btn-secondary">Login</button>
        </Link>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  searchString: PropTypes.string,
  onchangeInput: PropTypes.func
};

Navbar.defaultProps = {
  onchangeInput: () => {},
  searchString: ""
};

export default withRouter(Navbar);
