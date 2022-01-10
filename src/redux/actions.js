import {USER_AUTH_ERROR, USER_AUTH_START, USER_AUTH_SUCCESSES} from "./authReducer";

export const startLogin = (login, password, navigate) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: USER_AUTH_START,
      });
      const res = await fetch("http://localhost:3001/auth", {
        method: "POST",
        body: JSON.stringify({login, password}),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (json.error) {
        await dispatch({
          type: USER_AUTH_ERROR,
          payload: json.error,
        });
      } else {
        await dispatch({
          type: USER_AUTH_SUCCESSES,
          payload: json,
        });
        navigate(`/${json.id}`);
      }
    } catch (e) {
      console.error(e);
    }
  };
};
