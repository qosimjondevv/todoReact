import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="TodoApp" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
