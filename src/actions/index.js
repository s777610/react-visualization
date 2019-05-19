import {
  FIRSTVISIT,
  COINDATA,
  ADDCOIN,
  REMOVECOIN,
  SETFAVORTIE
} from "./types";

export const firstVisit = isFirstVisit => {
  return {
    type: FIRSTVISIT,
    isFirstVisit
  };
};

export const setCoinList = coinList => {
  return {
    type: COINDATA,
    coinList
  };
};

export const addCoin = key => {
  return {
    type: ADDCOIN,
    key
  };
};

export const removeCoin = key => {
  return {
    type: REMOVECOIN,
    key
  };
};

export const setFavorites = favorites => {
  return {
    type: SETFAVORTIE,
    favorites
  };
};
