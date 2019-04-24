import React, { Component } from "react";
import Navbar from "./Navbar";
import RecipeItem from "./RecipeItem";
import recipes from "../sample_data/recipes.json";

class App extends Component {
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
    const { searchString, recipes } = this.state;

    return (
      <div className="App">
        <Navbar value={searchString} onchangeInput={this.onchangeInputNav} />
        <div className="container mt-10">
          <div className="row">
            {recipes.map(item => (
              <RecipeItem
                item={item}
                key={Math.random()}
                textSearch={searchString.toLowerCase()}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
