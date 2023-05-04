import axios from "axios";
import React, { useState, useEffect } from "react";
import Tabla from "../components/Tabla";
import "./Buscar.css";

const Buscar = () => {
  const [query, setQuery] = useState("");
  const [datos, setDatos] = useState([]);

  const gestorBusca = (e) => {
    setQuery(e.target.value);
  };

  //   const gestorTecla = (e) => {
  //     const tecla = e.target.value;
  //     console.log(tecla);
  //   };

  useEffect(() => {
    const recupera = async () => {
      if (query.length === 0) {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/api/peliculas"
        );
        // const res = await axios.get('http://localhost:5000/api/peliculas');
        setDatos(res.data.peliculas);
      } else {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + `/api/peliculas/buscar/${query}`
        );
        setDatos(res.data.peliculas);
      }
      console.log(datos);
    };
    recupera();
  }, [query]);

  return (
    <div className="seccionBuscar">
      <input
        className="buscar"
        type="text"
        name="busca"
        placeholder="buscar"
        onChange={gestorBusca}
        // onKeyDown={gestorTecla}
      />
      <Tabla datos={datos} />
    </div>
  );
};

export default Buscar;
