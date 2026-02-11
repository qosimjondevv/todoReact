import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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

  return (
    <>
      <h1>login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ismingizni kiriting"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="parolingizni kiriting"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Login;
