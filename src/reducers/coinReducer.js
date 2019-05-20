import {
  COINDATA,
  ADDCOIN,
  REMOVECOIN,
  SETFAVORTIE,
  SETFILTEREDCOIN
} from "../actions/types";

const INTIAL_STATE = {
  coinList: null,
  favorites: new Set(),
  filteredCoins: null
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
    case SETFILTEREDCOIN:
      return {
        ...state,
        filteredCoins: action.filteredCoins
      };
    default:
      return state;
  }
};
