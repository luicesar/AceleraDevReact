import React from "react";
import PropTypes from "prop-types";

// TODO: Você deve verificar se a receita existe
const RecipePage = ({
  location: {
    state: { recipe: { title, thumbnail, ingredients } = {} } = {}
  } = {}
}) => (
  <div>
    <img className="card-img-top img-fluid imgRecipe" src={thumbnail} alt="" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        <strong>Ingredients: </strong>
        {ingredients}
      </p>
    </div>
  </div>
);

RecipePage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      recipe: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        ingredients: PropTypes.string
      })
    })
  })
};

export default RecipePage;
