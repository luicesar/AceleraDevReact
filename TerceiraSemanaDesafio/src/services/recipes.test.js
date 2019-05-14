import { getRecipesByIngredients, getRecipesByName } from "./recipes";

describe("RecipesService", () => {
  test("getRecipesByName success", async () => {
    const result = await getRecipesByName();

    setTimeout(() => {
      expect(result.results.length).toHaveLength(0);
      done();
    }, 1);

    //expect(result.results.length).toEqual(10);
  });

  test("getRecipesByIngredients success", async () => {
    const result = await getRecipesByIngredients();

    setTimeout(() => {
      expect(result.results.length).toHaveLength(0);
      done();
    }, 1);

    //expect(result).toHaveLength(10);
  });
});
