import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import Navbar from "./Navbar";
import { getRecipesByName, getRecipesByIngredients } from "../services/recipes";

class Home extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = { searchString: "", recipes: [], page: 1, ingredientsFilter: "" };
  }

  componentDidMount() {
    this._isMounted = true;
    this.handleGetRecipesByName("");
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async handleGetRecipesByName(value) {
    await getRecipesByName(value)
      .then(response => {
        if (this._isMounted) {
          this.setState({ recipes: response.results });
        }
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }


  handleGetRecipesByIngredients = async (page, pagination) => {

    const {
      match: { params: { searchString } } = {}
    } = this.props;

    const { ingredientsFilter } = this.state;

    if (pagination === "prev")
      this.setState({ page: page - 1 });
    else
      this.setState({ page: page + 1 });

    await getRecipesByIngredients(searchString, ingredientsFilter, this.state.page)
      .then(response => {
        this.setState({ recipes: response.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

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

    let ingredientsFilter = recipesFilter.length ? recipesFilter[0].ingredients : "";

    this.setState({ recipes: recipesFilter, ingredientsFilter: ingredientsFilter });
  }

  render() {
    let { searchString, recipes, page } = this.state;

    if (this.props.match && this.props.match.params)
      searchString = this.props.match.params.searchString;

    if (Number(page) <= 1)
      page = 1;

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
                  <button id="prev" className="page-link" href="#" onClick={() => this.handleGetRecipesByIngredients(page, 'prev')}>
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button id="next" className="page-link" href="#" onClick={() => this.handleGetRecipesByIngredients(page, 'next')}>
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
