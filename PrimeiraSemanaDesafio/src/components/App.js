import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Home";
import RecipePage from "./RecipePage";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="container mt-10">
            <Route exact path="/" component={Home} />
            <Route path="/:searchString" component={Home} />
            <Route path="/recipe/:slugify" component={RecipePage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
