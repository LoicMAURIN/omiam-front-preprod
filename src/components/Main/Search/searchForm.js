import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  setSettingsField, submitValue, valueToogle, saveCategoryId, fetchRecipesCategory,
} from '../../../action/homePage';
import imgTitle from '../../../assets/img/loupe.svg';

function SearchForm() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const handleChange = (evt) => {
    dispatch(setSettingsField(evt.target.value, 'search'));
  };

  const handleFocus = (evt) => {
    dispatch(valueToogle(evt.bubbles));
  };
  const handleBlur = (evt) => {
    dispatch(valueToogle(evt.cancelable));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitValue());
  };

  const { id, slug } = useParams();

  dispatch(saveCategoryId(id));
  useEffect(() => {
    dispatch(fetchRecipesCategory(id));
  }, [id]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <input
          value={valueSearch}
          onClick={handleFocus}
            // onBlur={handleBlur}
          onChange={handleChange}
          type="search"
          className="search__form-input"
          placeholder="Rechercher une recette"
        />
        <div className="search__form-list">
          {/* List Catégories */}
          <ul className="list-categories">
            <Link to="/recherche">
              <li className="list-categories-icon">
                <i className="icon-search" />
              </li>
            </Link>
            <Link
              to="/recettes/1/apero/search"
            >
              <li className="list-categories-icon">
                <i className="icon-drink" /> Apéro
              </li>
            </Link>
            <Link
              to="/recettes/2/entree/search"
            >
              <li className="list-categories-icon"><i className="icon-entrance" /> Entrée</li>
            </Link>
            <Link
              to="/recettes/3/plat/search"
            >
              <li className="list-categories-icon"><i className="icon-dish" /> Plat</li>
            </Link>
            <Link
              to="/recettes/4/dessert/search"
            >
              <li className="list-categories-icon"><i className="icon-cakes" /> Dessert</li>
            </Link>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
