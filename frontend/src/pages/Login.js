import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.loginBtn}>
            Login
          </button>
        </form>

        {/* Register Section */}
        <div style={styles.registerBox}>
          <span style={styles.newText}>New to Login?</span>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <button style={styles.registerBtn}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 0 15px rgba(0,0,0,0.15)",
  },
  title: {
    color: "#000000", // FIXED: visible on white
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #cccccc",
    outline: "none",
  },
  loginBtn: {
    padding: "10px",
    backgroundColor: "#4da6ff",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  registerBox: {
    marginTop: "20px",
    textAlign: "center",
  },
  newText: {
    color: "#000000",
    marginRight: "10px",
  },
  registerBtn: {
    backgroundColor: "transparent",
    color: "#4da6ff",
    border: "1px solid #4da6ff",
    padding: "6px 14px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;
