import { element } from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fileAction, difficultyAction, durationAction, titleAction, typeAction, etapeAction, postCreated, captionAction, toogleSteps, toogleStep9, toogleStep8, toogleStep7, toogleStep6, toogleStep5, toogleStep4, toogleSteps3, toogleSteps2, globalIngredients, ingredientAction, unitAction, quantityAction, fetchAction, toggleCreatedIngredients, toogleCreatedRecipe, toogleCreatedIngredients1, ingredientNameAction, unitAddAction, quantitiesAddAction, setSteps,
} from '../../action/createdRecipe';
import Etape from './Field/etapes';
import IngredientCreated from './IngredientCreated';
import Ingredient from './Ingredient';
import IngredientList from './IngredientList';
import Quantity from './Quantity';
import './styles.scss';
import Unit from './Unit';
import illustrationSvg from '../../assets/img/illustration-kitchen.svg';

function CreatedRecipe() {
  const [state, setState] = useState(
    {
      lengthTitle: 0,
      lengthCaption: 0,
    },
  );
  const dispatch = useDispatch();

  const valueTitle = useSelector((state) => state.title);
  const valueType = useSelector((state) => state.createdRecipe.category);
  const valueCaption = useSelector((state) => state.createdRecipe.captionAction);
  const valueDifficulty = useSelector((state) => state.createdRecipe.difficulty);
  const valueTime = useSelector((state) => state.createdRecipe.duration);

  const valueEtape = useSelector((state) => state.createdRecipe.steps.etape1);
  const valueEtape2 = useSelector((state) => state.createdRecipe.steps.etape2);
  const valueEtape3 = useSelector((state) => state.createdRecipe.steps.etape3);
  const valueEtape4 = useSelector((state) => state.createdRecipe.steps.etape4);
  const valueEtape5 = useSelector((state) => state.createdRecipe.steps.etape5);
  const valueEtape6 = useSelector((state) => state.createdRecipe.steps.etape6);
  const valueEtape7 = useSelector((state) => state.createdRecipe.steps.etape7);
  const valueEtape8 = useSelector((state) => state.createdRecipe.steps.etape8);
  const valueEtape9 = useSelector((state) => state.createdRecipe.steps.etape9);
  const toogleCreatedIngredient = useSelector((state) => state.createdRecipe.toggleCreatedIngredients);
  const toogle2 = useSelector((state) => state.createdRecipe.toogle2);

  const [toggles, setToggles] = useState(Array.from({ length: 9 }, () => false));
  const [togglesStep, setTogglesStep] = useState(0);
  const toggleHandler = (index) => {
    setTogglesStep(index);
    setToggles((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const listIngredientsFull = useSelector((state) => state.createdRecipe.listIngredients);

  const handleChangeTitle = ((evt) => {
    dispatch(titleAction(evt.target.value, 'title'));
    setState({ lengthTitle: evt.target.value.length });
  });
  const handleChangeDescription = ((evt) => {
    dispatch(captionAction(evt.target.value, 'caption'));
    setState({ lengthCaption: evt.target.value.length });
  });
  const handleChangeType = ((evt) => {
    dispatch(typeAction(evt.target.value, 'category'));
  });
  const handleChangeDifficulty = ((evt) => {
    //console.log(evt.target.value);
    dispatch(difficultyAction(evt.target.value, 'difficulty'));
  });
  const handleChangeTime = ((evt) => {
    dispatch(durationAction(evt.target.value, 'duration'));
  });
  const handleChangeFile = ((evt) => {
    // console.log(evt.target.files[0]);
    dispatch(fileAction(evt.target.files[0]));
  });
  const handleSumbit = ((evt) => {
    evt.preventDefault();
    dispatch(postCreated());
    // dispatch(durationAction(evt.target.value, 'duration'));
  });
  useEffect(
    () => {
      dispatch(fetchAction());
    },
    [],
  );

  function getPlaceholderForStep(index) {
    switch (index) {
      case 1:
        return "Préchauffer le four à 180°C";
      case 2:
        return "Couper les pommes en tranches";
      case 3:
        return "Ajouter du sucre au fond de la pâte et y déposer les pommes";
      case 4:
        return "Rajouter un peu de sucre sur les pommes";
      case 5:
        return "Beurrer le moule et y déposer la pâte";
      case 6:
        return "Enfourner pendant 30 minutes";
      case 7:
        return "Laisser refroidir";
      case 8:
        return "Ajouter de la chantilly ou de la crème fraiche";
      case 9:
        return "Déguster";
      default:
        return "";
    }
  }
  
  function getEtapeValue(index) {
    const etape = `etape${index}`;
    return state[etape] || "";
  }
  
  function isLastStepShown(index) {
    const etape = `etape${index}`;
    const nextEtape = `etape${index + 1}`;
    return !!state[etape] && !!state[nextEtape];
  }
  return (

    <div className="createdRecipe">
      <h1>
        Créer une recette
        <img src={illustrationSvg} className="illustration" alt="illustration création recette" />
      </h1>

      <form onSubmit={handleSumbit} action="/path/to/api" method="POST" encytpe="ENCTYPE_HERE">
        <div className="createdRecipe-label">
          <h2 className="label-title">Titre de la recette*</h2>
          <input
            type="text"
            onChange={handleChangeTitle}
            value={valueTitle}
            placeholder="ex: Tarte aux pommes"
            required
          />
          <p className="maxLength">{state.lengthTitle > 70 ? 'Le titre ne doit pas dépasser 70 caractères' : ''}</p>
        </div>
        <div className="createdRecipe-label opacity">
          <h2 className="label-title">Description de la recette</h2>
          <textarea
            id="caption"
            placeholder="ex: Une histoire de Miam's..."
            rows="3"
            onChange={handleChangeDescription}
            value={valueCaption}
          />
          <p className="maxLength">{state.lengthCaption > 200 ? 'La description ne doit pas dépasser 200 caractères' : ''}</p>
        </div>
        <div className="createdRecipe-label">
          <h2 className="label-title">Catégorie de la recette*</h2>
          <div className="form-radio">
            <div className="form-radio-element" onChange={handleChangeType}>
              <label htmlFor="radio-type-1">
                <input
                  name="type"
                  type="radio"
                  value={1}
                  id="radio-type-1"
                  onChange={handleChangeType}
                  checked={valueType === '1'}
                />
                <span><i className="icon-drink" id="radio-type-1" />Apéro</span>
              </label>
            </div>
            <div className="form-radio-element">
              <label htmlFor="radio-type-2">
                <input
                  name="type"
                  type="radio"
                  value={2}
                  id="radio-type-2"
                  checked={valueType === '2'}
                  onChange={handleChangeType}
                />
                <span><i className="icon-entrance" id="radio-type-2" />Entrée</span>
              </label>
            </div>
            <div className="form-radio-element">
              <label htmlFor="radio-type-3">
                <input
                  id="radio-type-3"
                  name="type"
                  type="radio"
                  value="3"
                  checked={valueType === '3'}
                  onChange={handleChangeType}
                />
                <span><i className="icon-dish" id="radio-type-3" />Plat</span>
              </label>
            </div>
            <div className="form-radio-element">
              <label htmlFor="radio-type-4">
                <input
                  id="radio-type-4"
                  name="type"
                  type="radio"
                  value="4"
                  checked
                  onChange={handleChangeType}
                />

                <span><i className="icon-cakes" id="radio-type-4" />Dessert</span>
              </label>
            </div>
          </div>
        </div>
        <div className="createdRecipe-label">
          <h2 className="label-title">Difficulté de la recette*</h2>
          <div className="form-radio">
            <div className="form-radio-element" onChange={handleChangeDifficulty}>
              <label htmlFor="radio-dif-1">
                <input
                  id="radio-dif-1"
                  type="radio"
                  value="1"
                  onChange={handleChangeDifficulty}
                  checked={valueDifficulty === '1'}
                />
                <span>
                  <i className="icon-difficulty-1" />
                  1
                </span>
              </label>
            </div>
            <div className="form-radio-element">
              <label htmlFor="radio-dif-2">
                <input
                  id="radio-dif-2"
                  type="radio"
                  name="difficulty"
                  value="2"
                  onChange={handleChangeDifficulty}
                  checked={valueDifficulty === '2'}
                />
                <span>
                  <i className="icon-difficulty-2" id="radio-dif-2" />
                  2
                </span>
              </label>
            </div>
            <div className="form-radio-element">
              <label htmlFor="radio-dif-3">
                <input
                  id="radio-dif-3"
                  type="radio"
                  value="3"
                  onChange={handleChangeDifficulty}
                  checked={valueDifficulty === '3'}
                />
                <span>
                  <i className="icon-difficulty-3" id="radio-dif-3" />
                  3
                </span>
              </label>
            </div>
          </div>
        </div>
        <h2 className="label-title">Temps de préparation en minutes*</h2>
        <div className="createdRecipe-label">
          <input
            type="number"
            placeholder="ex: 15"
            onChange={handleChangeTime}
            value={valueTime}
            required
          />
        </div>

        <div className="createdRecipe-label">
          <h2 className="label-title">Ingrédients de la recette (4 pers.)*</h2>
          <div className="ingredients">
            <div className="ingredient-list">
              <Ingredient onChange={(evt) => dispatch(ingredientAction(evt.target.value, 'ingredient0'))} />
              <Unit onChange={(evt) => dispatch(quantityAction(evt.target.value, 'quantity0'))} />
              <Quantity onChange={(evt) => dispatch(unitAction(evt.target.value, 'unit0'))} />
            </div>
            <IngredientList />
            <button type="button" className="" onClick={() => dispatch(toogleCreatedIngredients1())}>
              <i className="icon-add" />
              Ajouter un ingrédient
            </button>
            <div className="ingredient-created">
              {(toogleCreatedIngredient) ? (
                <div className="ingredient-list">
                  <IngredientCreated
                    onChange={(evt) => dispatch(ingredientNameAction(evt.target.value, 'ingredient0'))}
                  />
                  <Unit onChange={(evt) => dispatch(quantitiesAddAction(evt.target.value, 'quantity0'))} />
                  <Quantity onChange={(evt) => dispatch(unitAddAction(evt.target.value, 'unit0'))} />
                </div>
              ) : (
                ''
                // <span className="ingredient-created-button" onClick={() => dispatch(toggleCreatedIngredients())}>
                //   Ajouter un ingrédient
                // </span>
              )}
            </div>
          </div>

        </div>
        <div className="createdRecipe-label">
          <h2 className="label-title">Étapes de la recette</h2>
          <div className="steps">
  {Array.from({ length: 9 }, (_, i) => i + 1).map((index) => (
    <div className="step-add" key={index}>
      {index === 1 ? (
        <>
          <span className="step-title">Étape 1*</span>
          <div className="step">
            <Etape
              placeholder={`ex: ${getPlaceholderForStep(index)}`}
              onChange={(evt) => dispatch(etapeAction(evt.target.value, `etape${index }`))}
              value={getEtapeValue(index === 1)}
            />
          </div>
          {console.log(toggles[index])}
          { togglesStep < 2 ? (
          <button type="button" className="" onClick={() => toggleHandler(index + 1)}>
            <i className="icon-add" />
            Ajouter une étape
            </button>
          ) : ''}
        </>
      ) : ('')}
      { toggles[index] && (
        <>
        <span className="step-title">Étape {index}</span>
        <div className="step">
          <Etape
            placeholder={`ex: ${getPlaceholderForStep(index)}`}
            onChange={(evt) => dispatch(etapeAction(evt.target.value, `etape${index}`))}
            value={getEtapeValue(index)}
          />
        </div>
          {
            togglesStep === index && index < 9 ? (
            <button type="button" className="" onClick={() => toggleHandler(index + 1)}>
              <i className="icon-add" />
              Ajouter une étape
            </button>
            ) : ''
          }
          {togglesStep === index && index === 9 ? (
            <button type="button" className="" onClick={() => toggleHandler(index - 1)}>
            <i className="icon-delete" />
            Supprimer une étape
          </button>
          ) : ''}
        </>
      )}
    </div>
  ))}
</div>
        </div>
        <div className="createdRecipe-label">
            <span className="label-title">Votre image</span>
            <input
              type="file"
              onChange={handleChangeFile}
              id="fileUpload"
            />
          </div>
        <button className="send-button" type="submit">
                <span className="send-button-submit">Envoyer</span>
                <i className="icon-oven" />
              </button>
      </form>
    </div>
  );
}

export default CreatedRecipe;
