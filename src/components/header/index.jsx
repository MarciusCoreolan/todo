import React from "react";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import { SEARCH_TODO } from "../../redux/todoReducer";
import { USER_LOG_OUT } from "../../redux/authReducer";

function Header() {
  const dispatch = useDispatch();
  const searchTodo = useSelector((state) => state.todo.searchTodo);
  const user = useSelector((state) => state.user.user);
  const handleSearch = (text) => {
    dispatch({
      type: SEARCH_TODO,
      payload: text,
    });
  };
  const handleLogOut = () => {
    dispatch({ type: USER_LOG_OUT });
  };
  return (
    <header>
      <div className="wrapper">
        <div className={"header__logo_container"}>
          <i className="material-icons header__logo">fact_check</i>
          Список Дел
        </div>
        {user !== null && (
          <div className="header__search_container">
            <Input
              type={"text"}
              holder={"Найти"}
              value={searchTodo}
              onChange={handleSearch}
            />
            <Button text={"Выйти"} handleClick={handleLogOut} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
