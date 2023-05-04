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
          <th></th>
        </tr>
        {datos.map((dato) => (
          <tr key={dato._id} onClick={() => gestorSeleccion(dato)}>
            <td>{dato.nombre}</td>
            {dato.nombre !== null ? (
              <td>{dato.nombre}</td>
            ) : (
              <td>No Asignado</td>
            )}
            <td>{dato.anyo}</td>
            <td>{dato.duration}</td>
            <td>{dato.genero}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
