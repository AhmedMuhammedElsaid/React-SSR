import axiosInstance from "../../../helpers/axios";
import { FETCH_USERS } from "../types";

export const fetchUsers = () => async (dispatch) => {
  const result = await axiosInstance.get('users');
  console.log("result",result)
  dispatch({
      type:FETCH_USERS,
      payload:result
  })
};
