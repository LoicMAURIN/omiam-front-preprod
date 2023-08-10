// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_RECIPES_FULL = 'FETCH_RECIPES_FULL';

// Action creator => On l'utilise au moment du dispatch()
export function fetchRecipesFull() {
  return {
    type: FETCH_RECIPES_FULL,
  };
}


// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_RECIPES = 'SAVE_RECIPES';

// Action creator => On l'utilise au moment du dispatch()
export function saveRecipes(recipes) {
  return {
    type: SAVE_RECIPES,
    list: recipes,
  };
}
