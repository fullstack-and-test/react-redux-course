import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../todoReducer.js";

export default function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  const hadleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: { text } });
    setText("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Нове завдання..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Додати</button>
      </form>
      <div className="todo-list">
        <ul>
          {state.todos.map((todo) => (
            <li key={todo.id}>
              <div
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  name="completed"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } })
                  }
                />
                <label htmlFor={`todo-${todo.id}`}>
                  <span>{todo.text}</span>
                </label>

                <button
                  name="delete"
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
                  }
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
