import { FETCH_USERS } from "../types";
const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, users: payload?.data };
    default:
      return state;
  }
};

export default userReducer;
