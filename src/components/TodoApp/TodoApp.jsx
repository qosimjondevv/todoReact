import { useState } from "react";
import "./TodoApp.scss";
import TodoList from "../TodoList/TodoList";
function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (text === "") return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
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
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="todo qosh"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">add</button>
          <span>count: {todos.length}</span>
        </form>

        {/* ///////////// */}
        <div className="todoList">
          <ul>
            {todos.map((todo) => (
              <TodoList
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.id)}
                deleteBtn={() => deleteBtn(todo.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default TodoApp;
