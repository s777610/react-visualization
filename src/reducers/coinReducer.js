import { COINDATA, ADDCOIN, REMOVECOIN, SETFAVORTIE } from "../actions/types";

const INTIAL_STATE = {
  coinList: null,
  favorites: new Set()
};

// ["BTC", "ETH", "XMR", "DOGE"]

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case COINDATA:
      return { ...state, coinList: action.coinList };
    case ADDCOIN:
      return {
        ...state,
        favorites: new Set(state.favorites).add(action.key)
      };
    case REMOVECOIN:
      state.favorites.delete(action.key);
      return {
        ...state,
        favorites: new Set(state.favorites)
      };
    case SETFAVORTIE:
      return {
        ...state,
        favorites: new Set(action.favorites)
      };
    default:
      return state;
  }
};
