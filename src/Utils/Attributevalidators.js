import attributeValidators from './validators';

export default function fieldValidatiosErrors(user) {
  attributeValidators.reduce((error, validator) => {
    error[validator] = !attributeValidators[validator](user));
}
}
