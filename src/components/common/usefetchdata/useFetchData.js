import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const getFromState = (state, location, itemName) => {
  return location ? state.user[location][itemName] : state.user[itemName];
};

const useFetchData = location => {
  const isFetching = useSelector(state =>
    getFromState(state, location, "isFetching")
  );

  const errorMessage = useSelector(state =>
    getFromState(state, location, "errorMessage")
  );

  const items = useSelector(state => getFromState(state, location, "items"));

  return [isFetching, errorMessage, items];
};

useFetchData.propTypes = {
  location: PropTypes.string
};

export default useFetchData;
