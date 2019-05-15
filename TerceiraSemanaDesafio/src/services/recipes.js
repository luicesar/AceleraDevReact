const axios = require("axios");
const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = async (name, ingredients, page = 1) => {
  const searchUrl = `${API_PATH}?i=${ingredients}&q=${name}&p=${page}`;
  const result = await axios.get(searchUrl);
  return result.data.results;
};

const getRecipesByName = async (name = "", page = 1) => {
  const searchUrl = name === "" ? `${API_PATH}?p=${page}` : `${API_PATH}?q=${name}&p=${page}`;
   const result = await axios.get(searchUrl);
   return result.data.results;
};


export { getRecipesByIngredients, getRecipesByName };
