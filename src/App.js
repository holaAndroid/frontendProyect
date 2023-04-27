import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Error from "./pages/Error";
import Peliculas from "./pages/Peliculas";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Alta from "./pages/Alta";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logotipo" width="50vh" height="45vh" />
      <Router>
        <div className="navbar">
          <NavLink className={"navlink"} to="/">
            Inicio
          </NavLink>
          <NavLink className={"navlink"} to="/peliculas">
            Películas
          </NavLink>
          <NavLink className={"navlink"} to="/signup">
            Crear Cuenta
          </NavLink>
          <NavLink className={"navlink"} to="/login">
            Login
          </NavLink>
          <NavLink className={"navlink"} to="/logout">
            Logout
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Alta />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
