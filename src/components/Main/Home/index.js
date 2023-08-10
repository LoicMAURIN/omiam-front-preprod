import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../../action/homePage';

// import recipes from '../../../data/recipes';
import SearchForm from '../Search/searchForm';
import Spinner from '../../Spinner';
import './styles.scss';
import { fetchRecipesFull } from '../../../action/recipes';

function Home() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const toogleValue = useSelector((state) => state.homePage.addCards);
  const recipesFullApi = useSelector((state) => state.recipes.list);
  const lastRecipes = useSelector((state) => state.homePage.listHomeLast);
  const miamsRecipes = useSelector((state) => state.homePage.listHomeMiams);
  const randomRecipes = useSelector((state) => state.homePage.listHomeRandom);
  const userConnect = useSelector((state) => state.user.settingsLogIn.logs);
  useEffect(
    () => {
      dispatch(fetchRecipesFull());
      dispatch(fetchRecipes());
    },
    [],
  );
  // const tab = miamsRecipes.map((item) => console.log(item[*].id));

  const toogleSpinner = useSelector((state) => state.homePage.toggleSpinner);
  // console.log(toogleSpinner);

  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = recipesFullApi.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });
  // const recipesSliceEffect = () => recipesFilter.slice(0, 6);
  const recipesSlice = recipesFilter.slice(0, 3);
  // console.log(Illustration);
  return (
    <>

      {/* Title Page */}
      <h1 className="title-home">
        O'miam, une histoire de miam's et recettes
      </h1>
      { (!userConnect) ? (
      <>
      <h2>
        Rejoignez notre communauté de passionnés de cu  yisine et partagez vos créations culinaires.
      </h2>
      <button type="button">
        <Link to="/connexion">connexion</Link>
      </button>
      </>
      ) : ''
      }
      {/* Search */}
      <SearchForm />
      <div className="cards-home">
        {/* Cards Search */}

        { (toogleSpinner) && (toogleValue ? (
          <div className="cards-type">
            <h2 className="cards-recipe">Ma Recherche</h2>
            <div className="cards-list-type">
              {/* Card */}
              { recipesSlice.map((item) => (
                <Link key={item.id} to={`/recette/${item.id}/${item.slug}`}>
                  <div className="card">
                    <h2 className="card-recipe">{item.title}</h2>
                    { (toogleSpinner) ? (
                    <img
                      src={item.picture}
                      alt="Name"
                      className="card-img"
                    /> ) : 
                    <Spinner />
                    }
                    <div className="card-container">
                      <ul className="card-container-list">
                        <li><img className="card-container-list-img-user" src={item.user.avatar} alt={`${item.user.pseudo}-avatar`} /></li>
                        <li><i className={item.category.iconName} /> {item.category.name}</li>
                        <li>
                          <span>
                            <i className="icon-miam" /> {item.nbMiams}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              )) }
            </div>
          </div>
        ) : '')}

        {/* Cards Miam */}
        <div className="cards">
          <h2 className="cards-recipe">Les meilleurs Miam's</h2>
          <div className="cards-list">

            {/* Card */}
            { miamsRecipes.map((item) => (
              <Link key={item.id} to={`/recette/${item.id}/${item.slug}`}>
                <div className="card">
                  <h2 className="card-recipe">{item.title}</h2>
                  { (toogleSpinner) && 
                  <img
                    src={item.picture}
                    alt="Name"
                    className="card-img"
                  /> 
                  }
                  { (!toogleSpinner) && <Spinner />}
                  <div className="card-container">
                    <ul className="card-container-list">
                      <li><img className="card-container-list-img-user" src={item.user.avatar} alt={`${item.user.pseudo}-avatar`} /></li>
                      <li><i className={item.category.iconName} /> {item.category.name}</li>
                      <li>
                        <span>
                          <i className="icon-miam" /> {item.nbMiams}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            )) }
          </div>
        </div>
        {/* Cardn Last */}
        <div className="cards">
          <h2 className="cards-recipe">Les dernières recettes </h2>
          <div className="cards-list">

            {/* Card  */}
            { lastRecipes.map((item) => (
              <Link key={item.id} to={`/recette/${item.id}/${item.slug}`}>
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
                      <li>
                        <span>
                          <i className="icon-miam" /> {item.nbMiams}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            )) }
          </div>
        </div>
        {/* Cards Random */}
        <div className="cards">
          <h2 className="cards-recipe">Recettes aléatoires</h2>
          <div className="cards-list">

            {/* Card  */}
            { randomRecipes.map((item) => (
              <Link key={item.id} to={`/recette/${item.id}/${item.slug}`}>
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
                      <li>
                        <span>
                          <i className="icon-miam" /> {item.nbMiams}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            )) }
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
