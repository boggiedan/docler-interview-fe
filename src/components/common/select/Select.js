import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Select = ({ options, selectedOption, onSelect }) => {
  const changeHandler = event => onSelect(event.target.value);

  const renderOptions = option => (
    <option key={option.id} value={option.id}>
      {option.value}
    </option>
  );

  return (
    <select value={selectedOption || ""} onChange={changeHandler}>
      {options.map(renderOptions)}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.value
    }).isRequired
  ).isRequired,

  selectedOption: PropTypes.number,

  onSelect: PropTypes.func.isRequired
};

Select.defaultProps = {
  options: []
};

export default Select;
