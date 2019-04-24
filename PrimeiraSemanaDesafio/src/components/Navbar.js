
import React from 'react';
import { withRouter } from "react-router-dom";
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import { slugify } from "../helpers";

const Navbar = ({ value, onchangeInput, history }) => {

  console.log('onchangeInput:', onchangeInput)

  return (
    <nav className='navbar fixed-top navbar-expand-sm navbar-dark bg-dark'>
      <div className='navbar-brand col-1'>
        <img src={logo} className='Navbar-logo' alt='logo' />
      </div>

      <div className='form-group justify-content-center row col-10 my-2'>
        <input
          value={value}
          name='searchString'
          onChange={onchangeInput}
          className='form-control col-9 mr-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
      </div>
    </nav>
  )
};

Navbar.propTypes = {
  match: PropTypes.object.isRequired,
  searchString: PropTypes.string
}

export default withRouter(Navbar);

// import React from "react";
// import { withRouter } from "react-router-dom";
// import { slugify } from "../helpers";
// import logo from "../logo.svg";

// const Navbar = ({ location, history }) => {
//   const path = location.pathname;
//   const inputValue = path.includes("recipe")
//     ? ""
//     : path.slice(1).replace("-", " ");

//   return (
//     <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
//       <div className="navbar-brand col-1">
//         <img src={logo} className="Navbar-logo" alt="logo" />
//       </div>

//       <div className="form-group justify-content-center row col-10 my-2">
//         <input
//           onChange={({ target }) => history.push("/" + slugify(target.value))}
//           value={inputValue.replace("-", " ")}
//           className="form-control col-9 mr-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//       </div>
//     </nav>
//   );
// };

// export default withRouter(Navbar);

