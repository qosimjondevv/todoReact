function TodoList({ text, deleteBtn, completed, onToggle }) {
  return (
    <>
      <li>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        <span
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {text}
        </span>
        <button onClick={deleteBtn}>delete</button>
      </li>
    </>
  );
}
export default TodoList;
