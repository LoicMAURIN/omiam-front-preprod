import PropTypes from 'prop-types';
import {  useSelector } from 'react-redux';

function IngredientCreated({ onChange }) {
  const valueIngredient = useSelector((state) => state.createdRecipe.ingredientsAdd.nameAdd0);

  return (
    <input
      className="ingredients-type"
      type="text"
      onChange={onChange}
      value={valueIngredient}
      placeholder="Lait"
    />
  );
}
IngredientCreated.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default IngredientCreated;
