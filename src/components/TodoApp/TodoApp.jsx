import { useState } from "react";
import "./TodoApp.scss";
function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    if (text === "") return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
    e.preventDefault();
  };

  const deleteBtn = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  const toggleTodo = (id) => {
    const uptedeTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(uptedeTodo);
  };
  return (
    <>
      <div className="todoApp">
        <h1>Todo App</h1>
        <form>
          <input
            type="text"
            placeholder="todo qosh"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTodo}>add</button>
          <span>count: {todos.length}</span>
        </form>

        {/* ///////////// */}
        <div className="todoList">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => deleteBtn(todo.id)}>delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default TodoApp;
