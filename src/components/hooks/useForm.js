import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      alert("ismingiz va parolingizni kiriting");
      return;
    }
    navigator("/TodoApp");
  };

  return {
    name,
    setName,
    password,
    setPassword,
    handleSubmit,
  };
}
export default useForm;
