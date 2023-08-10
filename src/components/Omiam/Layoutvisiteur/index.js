import { Route, Routes } from 'react-router';
import Header from '../../Header';
import Main from '../../Main';
import Footer from '../../Footer';
import Connectionform from '../../Connectionform';
import CreatedRecipe from '../../CreatedRecipe';
import Categories from '../../Main/Categories';
import Home from '../../Main/Home';
import Search from '../../Main/Search';
import Aboutus from '../../Pages/Aboutus';
import Tscs from '../../Pages/Tscs';
import Privacy from '../../Pages/Privacy';
import Contact from '../../Pages/Contact';
import MyRecipes from '../../UserProfile/MyRecipes';
import Recipe from '../../Recipe';
import Error from '../../Error';

function Layoutvisiteur() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes/recherche" element={<Search />} />
          <Route path="/recette" element={<Recipe />} />
          <Route path="/qui-sommes-nous" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mention-legales" element={<Privacy />} />
          <Route path="/conditions-generales-utilisation" element={<Tscs />} />
          <Route path="/connexion" element={<Connectionform />} />
          <Route path="/Creer/Recette" element={<CreatedRecipe />} />
          <Route path="*" element={<Error />} />
          {/*
            <Route path="/mon-compte/ajouter-une-recette" element={< />} />
            <Route path="/inscription" element={< />} />
          */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Layoutvisiteur;
