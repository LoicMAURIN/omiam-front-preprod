import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesMyAccount } from '../../../action/myAccountRecipes';
import Buttonnavbar from '../Buttonnavbar';
import './styles.scss';

function MyRecipes() {
  const dispatch = useDispatch();
  const recipesMyAccount = useSelector((state) => state.myAccountRecipes.list);
  useEffect(
    () => {
      dispatch(fetchRecipesMyAccount());
    },
    [],
  );
  return (
    <>
      <Buttonnavbar />
      <div className="my-recipes">
        <h1 className="my-recipes-title">Mes Recettes</h1>
        <div className="my-recipes-cards">
          {recipesMyAccount.map((item) => (
            <div className="my-recipes-card">
              <Link to={`/recette/${item.id}/${item.slug}`}>
                <div className="my-recipes-card-img">
                  <img
                    src={item.picture}
                    alt="Name"
                    className="my-recipes-img"
                  />
                </div>
                <div className="my-recipes-card-block">
                  <div className="my-recipes-card-ul">
                    <ul className="my-recipes-display">
                      <li><h2 className="my-recipes-card-title">{item.title}</h2></li>
                      <li><i className={item.category.iconName} />{item.category.name}</li>
                      <li><i className={`icon-difficulty-${item.difficulty}`} /></li>
                      <li>
                        <span>
                          <i className="icon-miam" /> {item.nbMiams}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="my-recipes-responsive">
                    <ul className="my-recipes-card-overview">
                      <li><h2 className="my-recipes-card-overview-title">Aperçu de la Recette</h2></li>
                      <li><p className="my-recipes-card-overview-text">{item.caption ? item.caption : 'Il n\'y a pas d\'aperçu pour cette recette'}</p></li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyRecipes;
