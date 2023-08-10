import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Ingredient({ onChange }) {
  const listIngredients = useSelector((state) => state.createdRecipe.listIngredients);

  return (
    <select onChange={onChange} name="ingredient" required>
      <option>ex: Sucre</option>
      { listIngredients.map((item) => (
        <option value={item.id}>{item.name}</option>))}
    </select>

  );
}
Ingredient.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Ingredient;
