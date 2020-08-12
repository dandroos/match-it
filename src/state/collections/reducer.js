import { SET_HAS_COLLECTIONS } from "./types";

const initialState = {
  hasCollections: false,
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_HAS_COLLECTIONS:
      newState.hasCollections = payload;
      break;
    default:
      break;
  }
  return newState;
};
