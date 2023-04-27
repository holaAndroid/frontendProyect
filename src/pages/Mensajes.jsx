import React from "react";

const Mensajes = ({ nuevosClientes }) => {
  return (
    <div className="listado">
      <div>
        <h2>Listado de Clientes :</h2>
      </div>
      <div id="lista">
        <ul>
          <li>
            {" "}
            <strong>Nombre : </strong>
            <em>{nuevosClientes.nombre}</em>{" "}
          </li>
          <li>
            <strong>Edad : </strong> <em>{nuevosClientes.edad}</em>
          </li>
          <li>
            {" "}
            <strong>E-mail : </strong> <em>{nuevosClientes.email}</em>
          </li>
          <li>
            {" "}
            <strong>Mensaje : </strong> <em>{nuevosClientes.mensaje}</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mensajes;
