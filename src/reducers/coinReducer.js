import {
  COINDATA,
  ADDCOIN,
  REMOVECOIN,
  SETFAVORTIE,
  SETFILTEREDCOIN,
  SETPRICES
} from "../actions/types";

const INTIAL_STATE = {
  coinList: null,
  favorites: null,
  filteredCoins: null,
  prices: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case COINDATA:
      return { ...state, coinList: action.coinList };
    case ADDCOIN:
      return {
        ...state,
        favorites: [...state.favorites, action.key]
      };
    case REMOVECOIN:
      return {
        ...state,
        favorites: state.favorites.filter(fav => {
          return fav !== action.key;
        })
      };
    case SETFAVORTIE:
      return {
        ...state,
        favorites: action.favorites
      };
    case SETFILTEREDCOIN:
      return {
        ...state,
        filteredCoins: action.filteredCoins
      };
    case SETPRICES:
      return {
        ...state,
        prices: action.prices
      };
    default:
      return state;
  }
};
