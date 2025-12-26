import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    logoutUser();
    navigate("/");
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
