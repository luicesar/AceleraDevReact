import React, { Component } from "react";
import { Route, Redirect, BrowserRouter, withRouter } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import RecipePage from "./RecipePage";
import Login from "./Login";
import User from "./User";
import { isLogged } from "../services/loginService";

const HomeRoute = props => <Home {...props} />;
const LoginRoute = props =>
  isLogged() ? <Redirect to="/" /> : <Login {...props} />;
const ProfileRoute = props =>
  isLogged() ? <User {...props} /> : <Redirect to="/" />;
const RecipePageRoute = props => <RecipePage {...props} />;

class App extends Component {
  render() {
    const { location: { pathname } = {} } = this.props;
    const isRecipePage = pathname.includes("recipe");
    const isUserPage = pathname.includes("user");
    const searchString = isRecipePage || isUserPage ? "" : pathname.slice(1);

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar searchString={searchString} />
          <div className="container mt-10">
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/:searchString" component={HomeRoute} />
            <Route path="/recipe/:slugify" component={RecipePageRoute} />
            <Route path="/user/login" component={LoginRoute} />
            <Route path="/user/profile" component={ProfileRoute} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
