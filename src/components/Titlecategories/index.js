import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategoryTitle } from '../../action/homePage';

function Titlecategory() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  if (slug === 'entree') {
    dispatch(changeCategoryTitle('Entrée'));
  }
  if (slug === 'apero') {
    dispatch(changeCategoryTitle('Apéro'));
  }
  if (slug === 'plat') {
    dispatch(changeCategoryTitle('Plat'));
  }
  if (slug === 'dessert') {
    dispatch(changeCategoryTitle('Dessert'));
  }
  const categoryTitle = useSelector((state) => state.homePage.categoryTitle);

  return (
    <h1>{categoryTitle}</h1>
  );
}

export default Titlecategory;
