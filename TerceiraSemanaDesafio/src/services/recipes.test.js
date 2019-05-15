import { getRecipesByIngredients, getRecipesByName } from "./recipes";

describe("RecipesService", () => {
  test("getRecipesByName success", async () => {
    const result = await getRecipesByName();

    setTimeout(() => {
      expect(result.length).toHaveLength(0);
      console.log('recipesTest: ', result.length)
      done();
    }, 1);

  });

  test("getRecipesByIngredients success", async () => {
    const result = await getRecipesByIngredients();

    setTimeout(() => {
      expect(result.length).toHaveLength(0);
      done();
    }, 1);

  });
});
