import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../logo.svg";
import PropTypes from "prop-types";
import { slugify } from "../helpers";

const Navbar = ({ value, onchangeInput, location, history }) => {
  const path = location.pathname;
  const inputValue = path.includes("recipe")
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
          value={inputValue}
          onChange={onchangeInput}
          name="searchString"
          className="form-control col-9 mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  match: PropTypes.object,
  searchString: PropTypes.string,
  onchangeInput: PropTypes.func
};

export default withRouter(Navbar);
