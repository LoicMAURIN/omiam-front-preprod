import axios from 'axios';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';


import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Connectionform from '../Connectionform';
import CreatedRecipe from '../CreatedRecipe';
import Categories from '../Main/Categories';
import Home from '../Main/Home';
import Search from '../Main/Search/index';
import Aboutus from '../Pages/Aboutus';
import Tscs from '../Pages/Tscs';
import Privacy from '../Pages/Privacy';
import Contact from '../Pages/Contact';
import MyRecipes from '../UserProfile/MyRecipes';
import Recipe from '../Recipe';
import MyMiams from '../UserProfile/MyMiams';
import MyChiefs from '../UserProfile/MyChiefs';
import MiamsRecipes from '../MiamsRecipes';
import LastRecipes from '../LastRecipes';
import ChiefsSpotlight from '../ChiefsSpotlight';
import RandomRecipes from '../RandomRecipes';
import Error from '../Error';
import UserProfileHeader from '../UserProfile';
import SearchForm from '../Main/Search/searchForm';
import Titlecategory from '../Titlecategories';
import { keepLogin, toggleBackoffice } from '../../action/user';

import './styles.scss';

// == Composant
function Omiam() {
  const loggedIn = localStorage.getItem('logs');
  const avatar = localStorage.getItem('avatar');
  const userid = localStorage.getItem('userid');
  const role = localStorage.getItem('role');
  const pseudo = localStorage.getItem('pseudo');

  // setCookie('name',  instance.defaults.headers, { path: '/connexion' });
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(
    () => {
      dispatch(keepLogin(loggedIn, avatar, userid, role, pseudo));
      if (role === 'ROLE_ADMIN' || role === 'ROLE_MANAGER') {
        dispatch(toggleBackoffice());
      }
    },
    [],
  );

  useEffect(
    () => {
      // Ici on remonte le navigateur en haut
      // https://developer.mozilla.org/fr/docs/Web/API/Element/scrollTo
      window.scrollTo(0, 0);
    },
    // On rajoute une dépendance dans le tableau.
    // Du coup la callback au dessus se déclenchera à chaque modification de la valeur de location
    [location],
  );

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes/:id/:slug/search" element={<> <Titlecategory /> <SearchForm /> <Categories /></>} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/recette/:id/:slug" element={<Recipe />} />
          <Route path="/qui-sommes-nous/" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/miam" element={<MiamsRecipes />} />
          <Route path="/chefs" element={<ChiefsSpotlight />} />
          <Route path="/recettes-aleatoires" element={<RandomRecipes />} />
          <Route path="/dernieres-recettes" element={<LastRecipes />} />
          <Route path="/mention-legales" element={<Privacy />} />
          <Route path="/conditions-generales-utilisation" element={<Tscs />} />
          <Route path="/connexion" element={<Connectionform />} />
          <Route path="*" element={<Error />} />
          <Route path="/mon-compte" element={<MyRecipes />} />
          <Route path="/mon-compte/mes-recettes/" element={<MyRecipes />} />
          <Route path="/mon-compte/mes-miams/" element={<MyMiams />} />
          <Route path="/mon-compte/mes-chefs" element={<MyChiefs />} />
          <Route path="/creer-une-recette" element={<CreatedRecipe />} />
          {/*
          <Route path="/mon-compte/ajouter-une-recette" element={< />} />
          <Route path="/inscription" element={< />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// == Export
export default Omiam;
