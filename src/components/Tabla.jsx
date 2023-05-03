import { useState } from "react";
import "./Tabla.css";

const Tabla = ({ datos }) => {
  const [seleccionResultado, setSeleccionResultado] = useState(null);

  const gestorSeleccion = (dato) => {
    setSeleccionResultado(dato);
    console.log(dato);
  };

  return (
    <table className="tabla">
      <tbody>
        <tr>
          <th>nombre</th>
        </tr>
        {datos.map((dato) => (
          <tr key={dato._id} onClick={() => gestorSeleccion(dato)}>
            <td>{dato.nombre}</td>
            {dato.nombre !== null ? (
              <td>{dato.peliculas.nombre}</td>
            ) : (
              <td>No Asignado</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
