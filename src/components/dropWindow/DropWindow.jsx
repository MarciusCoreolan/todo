import React, { useState } from "react";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useRandomId } from "../../hooks/useRandomId";
import Button from "../button/Button";
import { ADD_NEW_TODO, WINDOW_OPEN_CLOSE } from "../../redux/todoReducer";

function DropWindow() {
  const addNewTodo = useSelector((state) => state.todo.addNewTodo);
  const randomId = useRandomId;
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({ type: WINDOW_OPEN_CLOSE });
  };

  const handleAdd = () => {
    dispatch({
      type: ADD_NEW_TODO,
      payload: { todo: newTodo, id: randomId() },
    });
    setNewTodo("");
  };

  return (
    <div
      className={`drop__menu__window 
        ${addNewTodo ? "menu__opened" : "menu__closed"}`}
    >
      <div className={"drop__menu__window_content"}>
        <Input
          type={"text"}
          holder={"Новое задание"}
          onChange={setNewTodo}
          value={newTodo}
        />
        <Button text={"Добавить"} handleClick={handleAdd} />
      </div>
      <div className="drop__menu_button" onClick={handleOpen}>
        <span
          className={`material-icons 
            ${addNewTodo ? "button_up" : "button_down"}`}
        >
          expand_more
        </span>
      </div>
    </div>
  );
}

export default DropWindow;
