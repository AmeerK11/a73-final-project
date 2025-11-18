import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
      <Link to="/summary" style={{ marginRight: "10px" }}>Summary</Link>
      <Link to="/reports" style={{ marginRight: "10px" }}>Reports</Link>
      <button onClick={logout} style={{ marginLeft: "20px" }}>Logout</button>
    </nav>
  );
};

export default Navbar;
