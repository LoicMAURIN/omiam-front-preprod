import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesFull } from '../../../action/recipes';
import Spinner from '../../Spinner';
import './styles.scss';

function Categories() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchRecipesFull());
    },
    [],
  );
  const toogleSpinner = useSelector((state) => state.homePage.toggleSpinner);
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const recipesFullApi = useSelector((state) => state.recipes.list);
  const recipesCategory = useSelector((state) => state.homePage.categoryRecipes);

  // console.log(recipe);
  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = recipesCategory.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });

  return (
    <>
      {/*
      <h1 className="title-page logo">Catégories</h1>
      <SearchForm />
       Title Page */}
      <div className="cards-list-type">
        { recipesFilter.map((item) => (
          <>
            {/* Cards Search */}
            { (!toogleSpinner) && <Spinner />}
            { toogleSpinner && (
            <div>
              <Link to={`/recette/${item.id}/${item.slug}`} key={item.id}>
                {/* Card */}
                <div className="card">
                  <h2 className="card-recipe">{item.title}</h2>
                  <img
                    src={item.picture}
                    alt="Name"
                    className="card-img"
                  />
                  <div className="card-container">
                    <ul className="card-container-list">
                      <li><img className="card-container-list-img-user" src={item.user.avatar} alt={`${item.user.pseudo}-avatar`} /></li>
                      <li><i className={item.category.iconName} /> {item.category.name}</li>
                      <li><span><i className="icon-miam" /> {item.nbMiams}</span></li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}

export default Categories;
