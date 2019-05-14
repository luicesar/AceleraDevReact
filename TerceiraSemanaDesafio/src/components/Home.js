import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import Navbar from "./Navbar";
import { getRecipesByName } from "../services/recipes";

class Home extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = { searchString: "", recipes: [] };
  }

  componentDidMount() {
    this._isMounted = true;
    this.handleGetRecipesByName("");
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleGetRecipesByName(value) {
    getRecipesByName(value)
      .then(response => {
        if (this._isMounted) {
          this.setState({ recipes: response.results });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  onchangeInputNav = e => {
    const value = e.target.value.toLowerCase();
    this.setState({ searchString: e.target.value });
    this.onChange(value);
  };

  onChange(value) {
    if (value.length > 0) {
      this.handleGetRecipesByName(value);
    }
    let { recipes } = this.state;
    const recipesFilter = recipes.filter(
      x =>
        x.title.toLowerCase().includes(value) ||
        x.ingredients.toLowerCase().includes(value)
    );

    this.setState({ recipes: recipesFilter });
  }

  render() {
    let { searchString, recipes } = this.state;

    if (this.props.match && this.props.match.params)
      searchString = this.props.match.params.searchString;

    let recipesFilter = !searchString
      ? recipes
      : recipes.filter(
          x =>
            x.title.toLowerCase().includes(searchString) ||
            x.ingredients.toLowerCase().includes(searchString)
        );

    return (
      <div>
        <Navbar value={searchString} onchangeInput={this.onchangeInputNav} />
        <div className="row">
          {recipesFilter &&
            recipesFilter.map(item => (
              <RecipeItem
                item={item}
                key={Math.random()}
                textSearch={searchString}
              />
            ))}
        </div>
        <div className="d-flex justify-content-center">
          {searchString && (
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <button id="prev" className="page-link" href="#">
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button id="next" className="page-link" href="#">
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string,
      path: PropTypes.string,
      searchString: PropTypes.string
    })
  })
};

export default Home;
