import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import useFetchData from "../../common/usefetchdata/useFetchData";
import useInitialFetch from "../../common/useinitialfetch/useInitialFetch";
import * as userActions from "../../user/userActions";
import Select from "../../common/select/Select";

const UserSelect = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFetching, errorMessage, items] = useFetchData();

  useInitialFetch(userActions.fetchAll);

  const shouldRenderUsers = () => {
    return !isFetching && !errorMessage && items.length > 0;
  };

  const userSelectHandler = userId => {
    setSelectedUser(userId);
    dispatch(userActions.fetchUserTodos(userId));
  };

  const usersOptions = items.map(user => ({ id: user.id, value: user.name }));

  return (
    <Fragment>
      {isFetching && !errorMessage && <p>Loading...</p>}
      {!!errorMessage && <p>Error: {errorMessage}</p>}
      {shouldRenderUsers() && (
        <Select
          options={usersOptions}
          selectedOption={selectedUser}
          onSelect={userSelectHandler}
        />
      )}
    </Fragment>
  );
};

export default UserSelect;
