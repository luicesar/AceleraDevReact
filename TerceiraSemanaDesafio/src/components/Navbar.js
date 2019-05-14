import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import logo from "../logo.svg";
import { slugify } from "../helpers";

const Navbar = ({ onchangeInput, location, history, searchString }) => {
  const path = location.pathname;
  searchString = path.includes("recipe")
    ? ""
    : path
        .slice(1)
        .replace("-", " ")
        .replace("search/", "");

  return (
    <nav
      className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark"
      onChange={({ target }) =>
        history.push("/search/" + slugify(target.value))
      }
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
    </nav>
  );
};

Navbar.propTypes = {
  searchString: PropTypes.string
};

Navbar.defaultProps = {
  onchangeInput: () => {}
};

export default withRouter(Navbar);
