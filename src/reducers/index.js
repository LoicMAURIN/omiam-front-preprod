import { combineReducers } from 'redux';
import homePage from './homePage';
import header from './header';
import contact from './contact';
import createdRecipe from './createdRecipe';
import user from './user';
import recipes from './recipes';
import myAccountRecipes from './myAccountRecipes';
import oneRecipe from './oneRecipe';

const rootReducer = combineReducers({
  homePage: homePage,
  header: header,
  contact: contact,
  oneRecipe: oneRecipe,
  recipes: recipes,
  createdRecipe: createdRecipe,
  user: user,
  myAccountRecipes: myAccountRecipes,

});

export default rootReducer;
