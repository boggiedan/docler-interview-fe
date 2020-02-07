import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

const useInitialFetch = action => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(action());
  }, []);
};

export default useInitialFetch;
