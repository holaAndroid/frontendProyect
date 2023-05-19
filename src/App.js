import { React, useState, useEffect } from "react";
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
/* import Peliculas from "./pages/Peliculas"; */
import Alquiler from "./pages/Alquiler";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Alta from "./pages/Alta";
import logo from "./logo.png";

function App() {
  const [tieneAcceso, setTieneAcceso] = useState(false);
  const gestionarLogin = () => {
    /*     setDatos(dato); // datos del usuario: email, password y token */
    setTieneAcceso(true);
    /*     // La variable que indica que está logueado se pone a true
    setToken(dato.token); */
    console.log(tieneAcceso);
  };

  const gestionarLogout = () => {
    setTieneAcceso(false);
  };
  return (
    <div className="App">
      <img src={logo} alt="logotipo" width="50vh" height="45vh" />
      <Router>
        <div className="navbar">
          {tieneAcceso === false ? (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"navlink"} to="/signup">
                Crear Cuenta
              </NavLink>
              <NavLink className={"navlink"} to="/login">
                Login
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              {/*   <NavLink className={"navlink"} to="/peliculas">
                Peliculas
              </NavLink> */}
              <NavLink className={"navlink"} to="/alquiler">
                Alquiler
              </NavLink>
              <NavLink className={"navlink"} to="/logout">
                Logout
              </NavLink>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* <Route path="/peliculas" element={<Peliculas />} /> */}
          <Route path="/alquiler" element={<Alquiler />} />
          <Route
            path="/login"
            element={<Login gestionarLogin={gestionarLogin} />}
          />
          <Route
            path="/logout"
            element={<Logout gestionarLogout={gestionarLogout} />}
          />
          <Route path="/signup" element={<Alta />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
      <div className="footer">
        <span>Desarrollo web elaborado by Yudi</span>
      </div>
    </div>
  );
}

export default App;
