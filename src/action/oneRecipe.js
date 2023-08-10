export const FETCH_RECIPE = 'FETCH_RECIPE';

export function fetchRecipe(nbMiams) {
  return {
    type: FETCH_RECIPE,
  };
}

export const SAVE_RECIPE = 'SAVE_RECIPE';

export function saveRecipe(oneRecipe) {
  return {
    type: SAVE_RECIPE,
    list: oneRecipe,
  };
}

export const SAVE_RECIPE_INGREDIENTS = 'SAVE_RECIPE_INGREDIENTS';

export function saveRecipeIngredients(oneRecipeIngredients) {
  return {
    type: SAVE_RECIPE_INGREDIENTS,
    list: oneRecipeIngredients,
  };
}

export const SAVE_RECIPE_STEPS = 'SAVE_RECIPE_STEPS';

export function saveRecipeSteps(oneRecipeSteps) {
  return {
    type: SAVE_RECIPE_STEPS,
    list: oneRecipeSteps,
  };
}

export const SAVE_COMMENTS = 'SAVE_COMMENTS';

export function saveComments(comments) {
  return {
    type: SAVE_COMMENTS,
    list: comments,
  };
}

export const COMMENT_ACTION = 'COMMENT_ACTION';

export function commentAction(value, field) {
  return {
    type: COMMENT_ACTION,
    value: value,
    field: field,
  };
}

export const COMMENT_CREACTED = 'COMMENT_CREACTED';

export function commentCreated() {
  return {
    type: COMMENT_CREACTED,
  };
}
export const ID_SLUG_RECIPE = 'ID_SLUG_RECIPE';

export function idSlugRecipe(value) {
  return {
    type: ID_SLUG_RECIPE,
    idSlug: value,
  };
}
export const SUBMIT_USERS_ID_MIAMS = 'SUBMIT_USERS_ID_MIAMS';

export function submitUsersIdMiams(valueMiam) {
  return {
    type: SUBMIT_USERS_ID_MIAMS,
    nbMiams: valueMiam,
  };
}

export const SAVE_RECIPE_USERSID = 'SAVE_RECIPE_USERSID';

export function saveRecipeUsersId(oneRecipeUsers) {
  return {
    type: SAVE_RECIPE_USERSID,
    usersId: oneRecipeUsers,
  };
}
export const SET_IS_MIAMS = 'SET_IS_MIAMS';

export function setIsMiam(value) {
  return {
    type: SET_IS_MIAMS,
    toggleMiams: value,
  };
}

export const SAVE_MIAMS = 'SAVE_MIAMS';

export function saveMiam(value) {
  return {
    type: SAVE_MIAMS,
    nbMiams: value,
  };
}
