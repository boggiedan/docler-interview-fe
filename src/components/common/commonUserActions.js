export const request = type => ({ type });

export const success = (type, data) => ({
  type,
  payload: {
    data
  }
});

export const failure = (type, errorMessage) => ({
  type,
  payload: {
    message: errorMessage
  }
});
