import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = () => {
  const [username, setUsername] = useState("ameer");
  const [password, setPassword] = useState("ameer");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear previous errors
    try {
      const token = await login(username, password);
      console.log("Login response token:", token); // <-- debug log
      if (!token) {
        setError("No token received from server.");
        return;
      }
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err); // <-- debug log
      setError("Login failed. Check credentials or backend status.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
