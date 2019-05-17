import { FIRSTVISIT } from "../actions/types";

const INTIAL_STATE = {
  //currentPage: "Settings",
  firstVisit: true
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    // case PAGE:
    //   return { ...state, currentPage: action.page };
    case FIRSTVISIT:
      return { ...state, firstVisit: false };
    default:
      return state;
  }
};
