import React from "react";
import PropTypes from "prop-types";

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ location: { state } }) => (
  <div>
    <img
      className="card-img-top img-fluid imgRecipe"
      src={state.recipe.thumbnail}
      alt=""
    />
    <div className="card-body">
      <h5 className="card-title">{state.recipe.title}</h5>
      <p className="card-text">
        <strong>Ingredients: </strong>
        {state.recipe.ingredients}
      </p>
    </div>
  </div>
);

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default RecipePage;
