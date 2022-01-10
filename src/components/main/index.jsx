import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import Todo from "../todo";
import DropWindow from "../dropWindow/DropWindow";
import {COMPLETED_TODO, DELETE_TODO} from "../../redux/todoReducer";

function Main() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const searchTodo = useSelector((state) => state.todo.searchTodo);
  const [delAnim, setDelAnim] = useState("");

  const handleDelete = (id) => {
    setDelAnim(id);
    setTimeout(() => {
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    }, 500);
  };
  const handleCompleted = (id) => {
    dispatch({
      type: COMPLETED_TODO,
      payload: id,
    });
  };

  return (
    <main>
      <DropWindow />

      <div className="wrapper">
        <ul>
          {todos
            .filter(
              (todo) =>
                todo.todoText.toUpperCase().indexOf(searchTodo.toUpperCase()) >
                -1
            )
            .map((todo) => (
              <Todo
                delAnim={delAnim}
                todo={todo}
                key={todo.id}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
              />
            ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
