import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import recipes from "../sample_data/recipes.json";
import Navbar from "./Navbar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: "",
      recipes: []
    };
  }

  componentDidMount() {
    this.setState({ recipes: this.recipes });
  }

  onchangeInputNav = e => {
    const value = e.target.value.toLowerCase();
    this.setState({ searchString: e.target.value });
    this.onChange(value);
  };

  onChange(value) {
    const recipesFilter = recipes.results.filter(
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
      <div className="App">
        <Navbar value={searchString} onchangeInput={this.onchangeInputNav} />
        <div className="row">
          {recipesFilter.map(item => (
            <RecipeItem
              item={item}
              key={Math.random()}
              textSearch={searchString}
            />
          ))}
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
