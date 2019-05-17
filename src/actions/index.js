import { FIRSTVISIT, COINDATA } from "./types";

// export const togglePage = page => {
//   return {
//     type: PAGE,
//     page
//   };
// };

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
