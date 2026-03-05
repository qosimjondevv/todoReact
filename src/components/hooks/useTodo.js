import { useState } from "react";
import { useTranslation } from "react-i18next";

function useTodo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState("eng");

  const changeLanguage = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
  };

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

  return {
    text,
    setText,
    todos,
    t,
    activeLang,
    changeLanguage,
    addTodo,
    deleteBtn,
    toggleTodo,
  };
}

export default useTodo;
