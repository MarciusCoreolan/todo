import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todoReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  user: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
