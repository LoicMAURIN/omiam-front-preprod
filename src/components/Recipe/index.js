import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  fetchRecipe, idSlugRecipe, saveMiam, setIsMiam, submitUsersIdMiams, SUBMIT_USERS_ID_MIAMS,
} from '../../action/oneRecipe';
import Comments from './Comments';
import './styles.scss';

function Recipe() {
  const dispatch = useDispatch();
  const { id } = useParams();

  dispatch(idSlugRecipe(id));
  // const userIdConnected = useSelector((state) => state.user.settingsLogIn.userid);
  const usersIdMiamed = useSelector((state) => state.oneRecipe.usersId);
  // console.log(usersIdMiamed);
  const oneRecipe = useSelector((state) => state.oneRecipe.list);
  const nbMiams = useSelector((state) => state.oneRecipe.nbMiams);
  const toggleMiams = useSelector((state) => state.oneRecipe.toogleMiams);

  const ingredients = useSelector((state) => state.oneRecipe.ingredients);
  const listSteps = useSelector((state) => state.oneRecipe.steps);
  useEffect(
    () => {
      dispatch(fetchRecipe());
      dispatch(setIsMiam(null));
    },
    [],
  );
  // console.log(usersIdMiamed);
  const handleSubmit = (evt) => {
    // const isMiam = usersIdMiamed.includes(userIdConnected);
    evt.preventDefault();
    const nbToggleMiams = (toggleMiams) ? +1 : -1;
    console.log(nbToggleMiams);
    dispatch(submitUsersIdMiams());
    dispatch(setIsMiam());
    dispatch(saveMiam(nbToggleMiams + nbMiams));
  };
  return (
    <div className="one-recipe">
      {oneRecipe.map((item) => (
        <>
          <div> 
            <div className="one-recipe-header">
              <h1 className="one-recipe-title" >{item.title}</h1>
              <h2>{item.caption}</h2>
              <div className="one-recipe-author">
                {/*
                  <img className="one-recipe-img-user" src={item.user.avatar} alt="-avatar" />
                */}
                <h3> de {item.user.pseudo}</h3>
              </div>

            </div>
            <div className="one-recipe-img">
              <img
                src={item.picture}
                alt={item.title}
                className="one-recipe-img"
              />
            </div>
            <div className="one-recipe-timer">
              <ul className="one-recipe-timer-ul">
                <li><span><i className="icon-timer" />{item.duration} min</span></li>
                <li><i className={`icon-difficulty-${item.difficulty}`} /> {item.difficulty}</li>
                <li><i className={item.category.iconName} /> {item.category.name}</li>
                <li>
                  <form onSubmit={handleSubmit}>
                    <button type="submit" className="one-recipe-miams-form">
                      <i className="icon-miam" />
                      {nbMiams}
                    </button>
                  </form>
                </li>
              </ul>
            </div>
            <div className="one-recipe-ingredient">
              <h2 className="one-recipe-ingredient-title">Ingrédients pour 4 personnes</h2>
              <ul className="one-recipe-ingredient-list">
                {ingredients.map((element) => (
                  <li className="ingredient" key={element.id}><p className="ingredient-text">{element.quantity} {element.unit} {element.ingredient.name}</p></li>
                ))}
              </ul>
            </div>
            <div className="one-recipe-steps">
              <ul className="one-recipe-steps-ul">
                {console.log(listSteps)}
                {Object.keys(listSteps[0]).map((nom, numberInt) => console.log('nom =>', nom, 'number =>', numberInt))}
                {Object.keys(listSteps[0]).map((nom, numberInt) => (
                  <li>
                    <h2 className="one-recipe-steps-title">Etape {numberInt + 1}</h2>
                    <p className="one-recipe-steps-etape">{listSteps[0][nom]}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Comments />
        </>
      ))}
    </div>
  );
}

export default Recipe;
