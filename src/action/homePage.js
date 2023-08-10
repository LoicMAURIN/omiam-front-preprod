export const FETCH_RECIPES = 'FETCH_RECIPES';

// Action creator => On l'utilise au moment du dispatch()
export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
  };
}

export const FETCH_RECIPES_CATEGORY = 'FETCH_RECIPES_CATEGORY';
// Action creator => On l'utilise au moment du dispatch()
export function fetchRecipesCategory(value) {
  return {
    type: FETCH_RECIPES_CATEGORY,
    value,
  };
}

export const SAVE_RECIPES_CATEGORY = 'SAVE_RECIPES_CATEGORY';
// Action creator => On l'utilise au moment du dispatch()
export function saveRecipesCategory(recipes) {
  return {
    type: SAVE_RECIPES_CATEGORY,
    recipes: recipes,
  };
}

export const SAVE_ONE_RECIPE_CATEGORY = 'SAVE_ONE_RECIPE_CATEGORY';
// Action creator => On l'utilise au moment du dispatch()
export function saveOneRecipeCategory(recipe) {
  return {
    type: SAVE_ONE_RECIPE_CATEGORY,
    recipe: recipe,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_RECIPES_LAST = 'SAVE_RECIPES_LAST';

// Action creator => On l'utilise au moment du dispatch()
export function saveRecipesLast(recipes) {
  return {
    type: SAVE_RECIPES_LAST,
    list: recipes,
  };
}
export const SAVE_RECIPES_MIAMS = 'SAVE_RECIPES_MIAMS';

export function saveRecipesMiams(recipes) {
  return {
    type: SAVE_RECIPES_MIAMS,
    list: recipes,
  };
}
export const SAVE_RECIPES_RANDOM = 'SAVE_RECIPES_RANDOM';

export function saveRecipesRandom(recipes) {
  return {
    type: SAVE_RECIPES_RANDOM,
    list: recipes,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_SETTINGS_FIELD = 'SET_SETTINGS_FIELD';

// Action creator => On l'utilise au moment du dispatch()
export function setSettingsField(value, field) {
  return {
    type: SET_SETTINGS_FIELD,
    value: value,
    field: field,
  };
}
// Action Type => On l'utilise dans l'action creator ET dans le reducer/middleware
export const SUBMIT_VALUE = 'submitValue';

// Action creator => On l'utilise au moment du dispatch()
export function submitValue() {
  return {
    type: SUBMIT_VALUE,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const VALUE_TOOGLE = 'VALUE_TOOGLE';

// Action creator => On l'utilise au moment du dispatch()
export function valueToogle() {
  return {
    type: VALUE_TOOGLE,
  };
}

export const TOGGLE_SPINNER = 'TOGGLE_SPINNER';

export function toggleSpinner(value, field) {
  return {
    type: TOGGLE_SPINNER,
    value: value,
    field: field,
  };
}

export const SAVE_CATEGORY_ID = 'SAVE_CATEGORY_ID';

export function saveCategoryId(value) {
  return {
    type: SAVE_CATEGORY_ID,
    value,
  };
}

export const CHANGE_CATEGORY_TITLE = 'CHANGE_CATEGORY_TITLE';

export function changeCategoryTitle(value) {
  return {
    type: CHANGE_CATEGORY_TITLE,
    value: value,
  };
}
