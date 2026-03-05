import "./TodoApp.scss";
import TodoList from "../TodoList/TodoList";
import useTodo from "../hooks/useTodo";
function TodoApp() {
  const {
    t,
    setText,
    todos,
    text,
    activeLang,
    changeLanguage,
    deleteBtn,
    addTodo,
    toggleTodo,
  } = useTodo();
  return (
    <>
      <div className="todoApp">
        <div className="translation">
          <h1>Todo App</h1>
          <div className="btn_trans">
            <button
              className={activeLang === "eng" ? "active" : ""}
              onClick={() => changeLanguage("eng")}
            >
              eng
            </button>
            <button
              className={activeLang === "uzb" ? "active" : ""}
              onClick={() => changeLanguage("uzb")}
            >
              uzb
            </button>
            <button
              className={activeLang === "rus" ? "active" : ""}
              onClick={() => changeLanguage("rus")}
            >
              rus
            </button>
          </div>
        </div>

        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="todo qosh"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="submit_btn">
            {t("add")}
          </button>
          <span>
            {t("count")} {todos.length}
          </span>
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
