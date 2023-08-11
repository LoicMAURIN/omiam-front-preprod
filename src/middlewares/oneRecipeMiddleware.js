import axios from 'axios';

import {
  FETCH_RECIPE,
  saveRecipe,
  saveRecipeIngredients,
  saveRecipeSteps,
  saveComments,
  SUBMIT_USERS_ID_MIAMS,
  COMMENT_CREACTED,
  submitUsersIdMiams,
  fetchRecipe,
  saveMiam,
} from '../action/oneRecipe';

const onRecipeMiddleware = (store) => (next) => (action) => {

  const state = store.getState();
  const { idSlug } = state.oneRecipe;
  const { token } = localStorage;

  switch (action.type) {
    case FETCH_RECIPE: {
      axios.get(`https://back.omiam-preprod.fr/api/recipes/${idSlug}`)
        .then(
          (response) => {
            //console.log(response);
            let result = response.data;
            let resultSteps = response.data.steps;
            if (!Array.isArray(response.data)){
                result = [response.data];
            }
            if (!Array.isArray(response.data.steps)){
                resultSteps = [response.data.steps];
            }
            const { nbMiams } = response.data;
            store.dispatch(saveRecipe(result));
            store.dispatch(saveMiam(nbMiams));
            store.dispatch(saveRecipeIngredients(response.data.recipeIngredients));
            store.dispatch(submitUsersIdMiams(response.data.usersId));
            store.dispatch(saveRecipeSteps(resultSteps));
            store.dispatch(saveComments(response.data.comments));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    case SUBMIT_USERS_ID_MIAMS: {
      const { nbMiam } = state.oneRecipe;
      const headers = { Authorization: `Bearer ${token}` };
      axios.get(
        `https://back.omiam-preprod.fr/api/recipes/${idSlug}/miams`,
        { headers },
      )
        .then((response) => {
          //console.log(response);
          return next(action);
        })
        .catch((error) => {
          console.log(error);
          return next(action);
        });
      return next(action);
    }
    case COMMENT_CREACTED: {
      const { commentValue } = state.oneRecipe.comment;
      const recipe = state.oneRecipe.list[0];

      console.log(recipe.slug);
      const headers = { Authorization: `Bearer ${token}` };
      axios.post(
        `https://back.omiam-preprod.fr/api/recipes/${idSlug}/comments`,
        { content: commentValue },
        { headers },
      )
        .then((response) => {
          //console.log(response);
          if (response.status === 201) {
            store.dispatch(fetchRecipe());
          }
          return next(action);
        })
        .catch((error) => {
          //console.log(error);
          return next(action);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default onRecipeMiddleware;






/*
let result = response.data;
        if (!Array.isArray(response.data)){
            result = [response.data];
        }
*/
