import "./App.css";
import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [toDoVal, settoDval] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodos = () => {
    if (toDoVal && toDoVal.trim().length > 0) {
      let newTodos = [...todos, { name: toDoVal, status: false }];
      setTodos(newTodos);
      settoDval("");
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    const removedTodo = newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          name="todoText"
          value={toDoVal}
          onChange={(e) => settoDval(e.target.value)}
        ></input>
        <button type="submit" onClick={addTodos}>
          {" "}
          Add
        </button>
        <ul>
          {todos &&
            todos.length > 0 &&
            todos.map((todo, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={todo.status}
                    onChange={() => toggleComplete(index)}
                  />
                  {todo.name}
                </li>
              );
            })}
        </ul>
      </header>
    </div>
  );
}

export default App;
