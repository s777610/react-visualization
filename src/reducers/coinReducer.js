import { COINDATA } from "../actions/types";

const INTIAL_STATE = {
  coinList: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case COINDATA:
      return { ...state, coinList: action.coinList };
    default:
      return state;
  }
};
