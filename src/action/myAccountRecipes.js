export const FETCH_RECIPES_MY_ACCOUNT = 'FETCH_RECIPES_MY_ACCOUNT';

export function fetchRecipesMyAccount() {
  return {
    type: FETCH_RECIPES_MY_ACCOUNT,
  };
}

export const SAVE_RECIPES_MY_ACCOUNT = 'SAVE_RECIPES_MY_ACCOUNT';

export function saveRecipesMyAccount(myAccountRecipes) {
  return {
    type: SAVE_RECIPES_MY_ACCOUNT,
    list: myAccountRecipes,
  };
}

export const FETCH_FAVORITES_MIAMS = 'FETCH_FAVORITES_MIAMS';

export function fetchFavoritesMiams() {
  return {
    type: FETCH_FAVORITES_MIAMS,
  };
}

export const SAVE_FAVORITES_MIAMS = 'SAVE_FAVORITES_MIAMS';

export function saveFavoritesMiams(miams) {
  return {
    type: SAVE_FAVORITES_MIAMS,
    list: miams,
  };
}
