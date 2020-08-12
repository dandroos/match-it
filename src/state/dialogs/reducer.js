import { SET_NEW_GAME_OPEN } from "./types";

const initialState = {
  newGame: {
    isOpen: false,
  },
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_NEW_GAME_OPEN:
      newState.newGame.isOpen = payload;
      break;
    default:
      break;
  }
  return newState;
};
