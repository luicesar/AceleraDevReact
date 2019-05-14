import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
import { getRecipesByIngredients } from "../services/recipes";

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        thumbnail: "",
        title: "",
        ingredients: ""
      },
      similarRecipes: []
    };

    this.handleGetRecipe = this.handleGetRecipe.bind(this);
    this.handleGetRecipesByIngredients = this.handleGetRecipesByIngredients.bind(
      this
    );
  }

  componentDidMount() {
    this.handleGetRecipe();
    this.handleGetRecipesByIngredients();
  }

  componentDidUpdate() {
    const { title } = this.state.recipe;

    if (title) {
      const {
        location: { state: { recipe: { title, ingredients } = {} } = {} } = {}
      } = this.props;

      if (this.state.recipe.title !== title) {
        this.handleGetRecipesByIngredients(title, ingredients);
        this.handleGetRecipe();
      }
    }
  }

  handleGetRecipe = () => {
    this.setState({ recipe: this.props.location.state.recipe });
    console.log("recipe: ", this.state.recipe);
    console.log(
      "this.props.location.state.recipe: ",
      this.props.location.state.recipe
    );
  };

  handleGetRecipesByIngredients = (titleSimilar, ingredientsSimilar) => {
    const {
      location: { state: { recipe: { title, ingredients } = {} } = {} } = {}
    } = this.props;

    let titleParam = titleSimilar ? titleSimilar : title;
    let ingredientsParam = ingredientsSimilar
      ? ingredientsSimilar
      : ingredients;

    getRecipesByIngredients(titleParam, ingredientsParam)
      .then(response => {
        this.setState({ similarRecipes: response.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { thumbnail, title, ingredients } = this.state.recipe;
    const { similarRecipes } = this.state;

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
          {similarRecipes && <h5 className="card-title">Similar recipes</h5>}
          <div className="row">
            {similarRecipes &&
              similarRecipes.map(item => (
                <RecipeItem item={item} key={Math.random()} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipePage;
