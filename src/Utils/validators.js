const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PSEUDO_REGEX = /^[A-Za-z0-9]{3,16}$/;

function isValidPseudo(pseudo) {
  return PSEUDO_REGEX.test(pseudo);
}

function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}

function isValidPassword(password) {
  return PWD_REGEX.test(password);
}

function validMatchPassword(password, confirmedPassword) {
  if (password === confirmedPassword) {
    return true;
  }
  return false;
}

export default attributeValidators = [{
  pseudo: isValidPseudo(),
  email: isValidEmail(),
  password: isValidPassword(),
  matchPassword: validMatchPassword(),
}];
