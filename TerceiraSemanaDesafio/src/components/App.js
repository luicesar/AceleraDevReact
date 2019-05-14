import React, { Component } from "react";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";

const HomeRoute = props => <Home {...props} />;
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
            <Route exact path="/search/:searchString" component={HomeRoute} />
            <Route path="/recipe/:slugify" component={RecipePageRoute} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
