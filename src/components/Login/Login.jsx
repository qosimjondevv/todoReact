import useForm from "../hooks/useForm";
import "./Login.scss";
function Login() {
  const { name, setName, password, setPassword, handleSubmit } = useForm();
  return (
    <div className="Login">
      <h1>Login</h1>
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
    </div>
  );
}

export default Login;
