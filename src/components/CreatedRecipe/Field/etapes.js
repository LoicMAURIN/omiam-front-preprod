import PropTypes from 'prop-types';

function Etape({ onChange, placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      rows="3"
      onChange={onChange}
    />
  );
}
Etape.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Etape;
