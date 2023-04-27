import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navegar = useNavigate();
  useEffect(() => {
    localStorage.removeItem("datosUsuario");
    navegar("/login");
  }, []);
  return <h1>Logged out...</h1>;
};

export default Logout;
