import React from "react";
import PropTypes from "prop-types";
import { logout } from "../services/loginService";

const User = ({ onLogout }) => {
  return (
    <button className="btn" onClick={onLogout}>
      Logout
    </button>
  );
};

User.defaultProps = {
  onLogout: () => {
    logout();
    window.location.href = "/";
  }
};

User.propTypes = {
  onLogout: PropTypes.func
};

export default User;
