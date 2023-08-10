import axios from 'axios';
import {
  FETCH_RECIPES,
  FETCH_RECIPES_CATEGORY,
  saveRecipesLast,
  saveRecipesMiams,
  saveRecipesRandom,
  saveRecipesCategory,
  toggleSpinner,
} from '../action/homePage';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const homePage = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      axios.get('https://back-omiam.unetaupechezvous.fr/public/api/home')
        .then(
          (response) => {
            store.dispatch(saveRecipesLast(response.data.lastRecipes));
            store.dispatch(saveRecipesMiams(response.data.miamsRecipes));
            store.dispatch(saveRecipesRandom(response.data.randomRecipes));
          },
        );
      return next(action);
    }
    case FETCH_RECIPES_CATEGORY: {
      const state = store.getState();
      const { categoryId } = state.homePage;
      axios.get(`https://back-omiam.unetaupechezvous.fr/public/api/recipes/categories/${categoryId}/search?query=`)
        .then(
          (response) => {
            store.dispatch(saveRecipesCategory(response.data));
          })
        .finally(() => { store.dispatch(toggleSpinner(true));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default homePage;
