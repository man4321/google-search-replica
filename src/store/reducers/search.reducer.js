import * as Actions from "../actions";

const initialState = {
  suggeation: [],
};

const SearchReducer = (store = initialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_API_CALL:
      return {
        suggeation: action.payload[1],
      };
    default :
    return store;
  }
};

export default SearchReducer;