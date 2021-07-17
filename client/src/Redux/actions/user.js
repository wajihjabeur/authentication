import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../Const/user";
import axios from "axios";
export const registerUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/register", user);

    // localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_USER, payload: result.data });
    history.push("/dashboard");
  } catch (error) {
    const { errors,msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    // dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const loginUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    history.push("/dashboard");
  } catch (error) {
      
    const { errors,msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    if(msg){alert(msg)}
    // dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    Headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data.result });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};
