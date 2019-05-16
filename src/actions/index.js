import { PAGE, FIRSTVISIT } from "./types";

export const togglePage = page => {
  return {
    type: PAGE,
    page
  };
};

export const firstVisit = isFirstVisit => {
  return {
    type: FIRSTVISIT,
    isFirstVisit
  };
};
