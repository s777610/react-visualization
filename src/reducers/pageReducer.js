import { FIRSTVISIT } from "../actions/types";

const INTIAL_STATE = {
  firstVisit: true
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FIRSTVISIT:
      return { ...state, firstVisit: action.isFirstVisit };
    default:
      return state;
  }
};
