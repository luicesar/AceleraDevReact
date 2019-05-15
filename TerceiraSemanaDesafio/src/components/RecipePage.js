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

  handleGetRecipe = async () => {
    if(this.props.location){
      await this.setState({ recipe: this.props.location.state.recipe });
    }
  };

  handleGetRecipesByIngredients = async (titleSimilar, ingredientsSimilar) => {
    const {
      location: { state: { recipe: { title, ingredients } = {} } = {} } = {}
    } = this.props;

    let titleParam = titleSimilar ? titleSimilar : title;
    let ingredientsParam = ingredientsSimilar
      ? ingredientsSimilar
      : ingredients;

      
    const dados =  await getRecipesByIngredients(titleParam, ingredientsParam);
    this.setState({ similarRecipes: dados });
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
