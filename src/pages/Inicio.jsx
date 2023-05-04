import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabla from "../components/Tabla";
import "./Buscar.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://res.cloudinary.com/dzfi2sk1i/image/upload/v1682594945/slider1_htxhi1.png",
    caption: "Slide 2",
  },
  {
    url: "https://res.cloudinary.com/dzfi2sk1i/image/upload/v1682594953/slider2_wanlse.png",
    caption: "Slide 2",
  },
  {
    url: "https://res.cloudinary.com/dzfi2sk1i/image/upload/v1682594441/X13Ymrt_db5qk1.jpg",
    caption: "Slide 3",
  },
];
const Inicio = () => {
  const [query, setQuery] = useState("");
  const [datos, setDatos] = useState([]);

  const gestorBusca = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    const recupera = async () => {
      if (query.length === 0) {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/peliculas"
        );
        // const res = await axios.get('http://localhost:5000/api/peliculas');
        setDatos(res.data.peliculas);
      } else {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + `/peliculas/buscar/${query}`
        );
        setDatos(res.data.peliculas);
      }
      console.log(datos);
    };
    recupera();
  }, [query]);

  return (
    <div>
      {" "}
      <div className="seccionBuscar">
        <input
          className="buscar"
          type="text"
          name="busca"
          placeholder="introduce nombre de película"
          onChange={gestorBusca}
          // onKeyDown={gestorTecla}
        />
        <Tabla datos={datos} />
      </div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Inicio;
