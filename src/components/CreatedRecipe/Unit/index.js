import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Unit({ onChange }) {
  const valueQuantity = useSelector((state) => state.createdRecipe.recipeIngredients.quantity);
  return (
    <input
      className="ingredients-type"
      type="number"
      onChange={onChange}
      value={valueQuantity}
      placeholder="ex: 1"
      required
    />

  );
}
Unit.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Unit;
