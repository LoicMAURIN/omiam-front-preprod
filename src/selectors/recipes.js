/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  Recipe selector
 * @param {Array} recipes - recipes list
 * @param {string} searchedSlug - slug of the recipe
 * @return {Object} - recipe
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}
