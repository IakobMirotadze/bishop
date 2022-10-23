import { TOPMENU_FETCH, GET_ALL_FETCH_FAIL } from "../types";
import axios from "axios";
import { API_URL } from "../../../config";

export const getTopmenu_r = () => async (dispatch) => {
   await axios
      .get("http://188.40.156.189:5000/topmenupublic/not")
      .then((res) => {
         dispatch({
            type: TOPMENU_FETCH,
            payload: res.data,
         });
      })
      .catch((err) => {
         dispatch({
            type: GET_ALL_FETCH_FAIL,
            payload: err.message + API_URL,
         });
      });
};
