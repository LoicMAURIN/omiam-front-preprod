import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import myAccountRecipes from '../middlewares/myAccountRecipes';
import recipes from '../middlewares/recipes';
import userMiddleware from '../middlewares/userMiddleware';
import createdRecipeMiddleware from '../middlewares/createdRecipeMiddleware';
import oneRecipeMiddleware from '../middlewares/oneRecipeMiddleware';
import homePageMiddleware from '../middlewares/homePageMiddlewares';
import contactMiddleware from '../middlewares/contactMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    recipes,
    userMiddleware,
    createdRecipeMiddleware,
    myAccountRecipes,
    oneRecipeMiddleware,
    homePageMiddleware,
    contactMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
