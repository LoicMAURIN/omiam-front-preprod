import { Route, Routes } from 'react-router';
import UserProfileHeader from '../../UserProfile';
import Footer from '../../Footer';
import CreatedRecipe from '../../CreatedRecipe';
import MyRecipes from '../../UserProfile/MyRecipes';
import MyMiams from '../../UserProfile/MyMiams';
import MyChiefs from '../../UserProfile/MyChiefs';
import Error from '../../Error';

function Layoutconnecte() {
  return (
    <>
      <UserProfileHeader />
      <main>
        <Routes>
          <Route path="/mon-compte" element={<UserProfileHeader />} />
          <Route path="/mon-compte/mes-recettes" element={<MyRecipes />} />
          <Route path="/mon-compte/mes-miams" element={<MyMiams />} />
          <Route path="/mon-compte/mes-chefs" element={<MyChiefs />} />
          <Route path="/Creer/Recette" element={<CreatedRecipe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Layoutconnecte;
