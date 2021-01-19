import axios from "axios";
export const SEARCH_API_CALL = "SEARCH_API_CALL";

export const searchApi = (data) => {
  return async (dispatch) => {
    // const params = {
    //   client: "chrome",
    //   q: data,
    //   hl: "en",
    // };
    const response = await axios.get(`http://suggestqueries.google.com/complete/search?q=${data}&client=firefox&hl=fr`);
    
    // console.log(response.data);
    dispatch({
      type: SEARCH_API_CALL,
      payload: response.data,
    });
  };
};
