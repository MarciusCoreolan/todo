import React from "react";

function Todo({ todo, handleDelete, handleCompleted, delAnim }) {
  return (
    <li className={`todo__item ${delAnim === todo.id && "todo_delete"}`}>
      <div className={`todo__text ${todo.completed && "todo__complete"}`}>
        {todo.todoText}
      </div>

      <div className="todo__completed">
        <input
          type="checkbox"
          className={"todo__checkbox"}
          checked={todo.completed}
          onChange={() => handleCompleted(todo.id)}
        />
        <button
          className="material-icons todo__button"
          onClick={() => handleDelete(todo.id)}
        >
          delete_forever
        </button>
      </div>
    </li>
  );
}

export default Todo;
