export const contructRequest = state => ({
  ...state,
  isFetching: true,
  errorMessage: "",
  items: []
});

export const constructSuccess = (state, action) => ({
  ...state,
  isFetching: false,
  errorMessage: "",
  items: action.payload.data
});

export const constructFailure = (state, action) => ({
  ...state,
  isFetching: false,
  errorMessage: action.payload.message,
  items: []
});

export const constructLinkedEntitiesRequest = (state, action) => ({
  ...state,
  linkedEntities: contructRequest(state.linkedEntities, action)
});

export const constructLinkedEntitiesSuccess = (state, action) => ({
  ...state,
  linkedEntities: constructSuccess(state.linkedEntities, action)
});

export const constructLinkedEntitiesFailure = (state, action) => ({
  ...state,
  linkedEntities: constructFailure(state.linkedEntities, action)
});
