import axios from 'axios';
import {
  FETCH_RECIPES_MY_ACCOUNT,
  saveRecipesMyAccount,
  FETCH_FAVORITES_MIAMS,
  saveFavoritesMiams,
} from '../action/myAccountRecipes';

const axiosInstance = axios.create({
  baseURL: 'https://back-omiam.unetaupechezvous.fr/public/api/',
});

const myAccountRecipes = (store) => (next) => (action) => {
  const state = store.getState();
  const { userid } = localStorage;
  const { token } = localStorage;
  switch (action.type) {
    case FETCH_RECIPES_MY_ACCOUNT: {
      axiosInstance.get(
        `recipes/user/${userid}`,
      )
        .then(
          (response) => {
            store.dispatch(saveRecipesMyAccount(response.data));
            console.log(response.data);
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    case FETCH_FAVORITES_MIAMS: {
      axiosInstance({
        method: 'get',
        url: `users/${userid}/miams`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveFavoritesMiams(response.data));
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default myAccountRecipes;
