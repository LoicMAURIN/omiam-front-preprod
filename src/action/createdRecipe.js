export const SET_STEPS = 'SET_STEPS';

export function setSteps(field) {
  return {
    type: SET_STEPS,
    field: field,
  };
}

export const TITLE_ACTION = 'TITLE_ACTION ';

export function titleAction(value, field) {
  return {
    type: TITLE_ACTION,
    value: value,
    field: field,
  };
}
export const INGREDIENTS_ACTION = 'INGREDIENTS_ACTION ';

export function ingredientsAction(value, field) {
  return {
    type: INGREDIENTS_ACTION,
    value: value,
    field: field,
  };
}
export const INGREDIENT_NAME_ACTION = 'INGREDIENT_NAME_ACTION';

export function ingredientNameAction(value, field) {
  return {
    type: INGREDIENT_NAME_ACTION,
    value: value,
    field: field,
  };
}
export const TYPE_ACTION = 'TYPE_ACTION';

export function typeAction(value, field) {
  return {
    type: TYPE_ACTION,
    value: value,
    field: field,
  };
}

export const DIFFICULTY_ACTION = 'DIFFICULTY_ACTION';

export function difficultyAction(value, field) {
  return {
    type: DIFFICULTY_ACTION,
    value: value,
    field: field,
  };
}

export const DURATION_ACTION = 'DURATION_ACTION';

export function durationAction(value, field) {
  return {
    type: DURATION_ACTION,
    value: value,
    field: field,
  };
}
export const CAPTION_ACTION = 'CAPTION_ACTION';

export function captionAction(value, field) {
  return {
    type: CAPTION_ACTION,
    value: value,
    field: field,
  };
}

export const INGREDIENT_ACTION = 'INGREDIENT_ACTION';

export function ingredientAction(value, field) {
  return {
    type: INGREDIENT_ACTION,
    value: value,
    field: field,
  };
}

export const UNIT_ACTION = 'UNIT_ACTION';

export function unitAction(value, field) {
  return {
    type: UNIT_ACTION,
    value: value,
    field: field,
  };
}
export const QUANTITY_ACTION = 'QUANTITY_ACTION';

export function quantityAction(value, field) {
  return {
    type: QUANTITY_ACTION,
    value: value,
    field: field,
  };
}

export const ETAPE_ACTION = 'ETAPE_ACTION';

export function etapeAction(value, field) {
  return {
    type: ETAPE_ACTION,
    value: value,
    field: field,
  };
}
export const POST_CREACTED = 'POST_CREACTED';

export function postCreated() {
  return {
    type: POST_CREACTED,
  };
}

export const TOOGLE_STEPS = 'TOOGLE_STEPS';

export function toogleSteps(index) {
  return {
    index: `toogle${index}`,
    type: TOOGLE_STEPS,
  };
}

export const TOOGLE_STEPS2 = 'TOOGLE_STEPS2';

export function toogleSteps2() {
  return {
    type: TOOGLE_STEPS2,
  };
}

export const TOOGLE_STEPS3 = 'TOOGLE_STEPS3';

export function toogleSteps3() {
  return {
    type: TOOGLE_STEPS3,
  };
}
export const TOOGLE_STEPS4 = 'TOOGLE_STEPS4';

export function toogleStep4(value, field) {
  return {
    type: TOOGLE_STEPS4,
    value: value,
    field: field,
  };
}
export const TOOGLE_STEPS5 = 'TOOGLE_STEPS5';

export function toogleStep5(value, field) {
  return {
    type: TOOGLE_STEPS5,
    value: value,
    field: field,
  };
}
export const TOOGLE_STEPS6 = 'TOOGLE_STEPS6';

export function toogleStep6(value, field) {
  return {
    type: TOOGLE_STEPS6,
    value: value,
    field: field,
  };
}
export const TOOGLE_STEPS7 = 'TOOGLE_STEPS7';

export function toogleStep7(value, field) {
  return {
    type: TOOGLE_STEPS7,
    value: value,
    field: field,
  };
}
export const TOOGLE_STEPS8 = 'TOOGLE_STEPS8';

export function toogleStep8(value, field) {
  return {
    type: TOOGLE_STEPS8,
    value: value,
    field: field,
  };
}
export const TOOGLE_STEPS9 = 'TOOGLE_STEPS9';

export function toogleStep9(value, field) {
  return {
    type: TOOGLE_STEPS9,
    value: value,
    field: field,
  };
}
export const TOOGLE_INGREDIENTS = 'TOOGLE_INGREDIENTS';

export function toogleIngredients() {
  return {
    type: TOOGLE_INGREDIENTS,
  };
}
export const FILE_ACTION = 'FILE_ACTION';

export function fileAction(value, field) {
  return {
    type: FILE_ACTION,
    value: value,
    field: field,
  };
}

export const FETCH_ACTION = 'FETCH_ACTION';

export function fetchAction() {
  return {
    type: FETCH_ACTION,
  };
}
export const SAVE_FETCH_INGREDIENTS = 'SAVE_FETCH_INGREDIENTS';

export function saveFetchIngredients(listIngredientsFetch) {
  return {
    type: SAVE_FETCH_INGREDIENTS,
    listIngredients: listIngredientsFetch,
  };
}
export const TOOGLE_CREATED_RECIPE = 'TOOGLE_CREATED_RECIPE';

export function toogleCreatedRecipe() {
  return {
    type: TOOGLE_CREATED_RECIPE,
  };
}
export const TOOGLE_CREATED_INGREDIENTS = 'TOOGLE_CREATED_INGREDIENTS';

export function toggleCreatedIngredients() {
  return {
    type: TOOGLE_CREATED_INGREDIENTS,
  };
}
export const TOOGLE_CREATED_INGREDIENTS1 = 'TOOGLE_CREATED_INGREDIENTS1';

export function toogleCreatedIngredients1(toogleCreatedAction) {
  return {
    type: TOOGLE_CREATED_INGREDIENTS1,
    toogleCreatedIngredients1: toogleCreatedAction,
  };
}
export const GLOBAL_INGREDIENT = 'GLOBAL_INGREDIENT';

export function globalIngredients(ingredient, unit) {
  return {
    type: GLOBAL_INGREDIENT,
    ingredient: ingredient,
    unit: unit,
  };
}

export const UNIT_ADD_ACTION = 'UNIT_ADD_ACTION';

export function unitAddAction(value, field) {
  return {
    type: UNIT_ADD_ACTION,
    value: value,
    field: field,
  };
}
export const QUANTITIES_ADD_ACTION = 'QUANTITIES_ADD_ACTION';

export function quantitiesAddAction(value, field) {
  return {
    type: QUANTITIES_ADD_ACTION,
    value: value,
    field: field,
  };
}
