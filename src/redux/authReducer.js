export const USER_AUTH_START = "user/auth/start";
export const USER_AUTH_SUCCESSES = "user/auth/successes";
export const USER_LOG_OUT = "user/log/out";
export const USER_AUTH_ERROR = "user/auth/error";

const initialState = {
  user: null,
  userAuthLoading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_START:
      return {
        ...state,
        userAuthLoading: true,
      };
    case USER_AUTH_SUCCESSES:
      return {
        ...state,
        userAuthLoading: false,
        user: action.payload,
        error: null,
      };
    case USER_LOG_OUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    case USER_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
