import axios from "axios";
export const SEARCH_API_CALL = "SEARCH_API_CALL";

export const searchApi = (data) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://suggestqueries.google.com/complete/search?q=${data}&client=Chrome&hl=en`
    );
    dispatch({
      type: SEARCH_API_CALL,
      payload: response.data,
    });
  };
};
