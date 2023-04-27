import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Image } from "cloudinary-react"; // ? Instalar cloudinary-react e importar el/los componentes necesarios

const Usuarios = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [urlImagen, setUrlImagen] = useState(""); // ? Añadir para gestionar imágenes

  const extraerDatosDeUsuario = () => {
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.token) {
      // Si existe algo que recuperar y dentro de lo recuperado existe la propiedad token
      console.log(datosRecuperar.token);
      return [datosRecuperar.token, datosRecuperar.userId];
    }
  };

  const gestorFormulario = async (data) => {
    console.log(extraerDatosDeUsuario());
    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/usuarios",
        {
          nombre: data.curso,
          email: data.email,
          password: data.password,
        },
        // {
        //   headers: {
        //     Authorization: "Bearer " + extraerDatosDeUsuario()[0], // En los headers van 'Bearer ' + token recibido
        //   },
        }
      )
      .then((response) => {
        console.log("Todo correcto", response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const subeImagen = (e) => {
    const imagen = e.target.files[0];
    console.log(imagen);

    const formImagen = new FormData();
    formImagen.append("file", imagen);
    formImagen.append("upload_preset", "ddcu4b7d");

    axios
      .post("https://api.cloudinary.com/v1_1/franio/image/upload", formImagen)
      // ? Añadir setUrlImagen para cargar la URL de la imagen en Cloudinary
      .then((res) => {
        setUrlImagen(res.data.url);
        console.log(urlImagen);
      });
  };

  return (
    <div className="temp">
      <Image
        cloudName="franio"
        // ! Muestra una de las imágenes que tengo en mi colección
        publicId={urlImagen} // ? Indicar la URL de la imagen en CLoudinary
      />
      <div className="Form">
        <div className="title">Nuevo Usuario</div>
        <div className="inputs">
          <form className="formita" onSubmit={handleSubmit(gestorFormulario)}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              {...register("nombre")}
            />
            {errors.nombre && <p>{errors.nombre.message}</p>}
            <input
              type="text"
              name="docente"
              placeholder="Seleccione Docente..."
              {...register("docente")}
            />
            {errors.docente && <p>{errors.docente.message}</p>}
            <input
              type="text"
              name="opcion"
              placeholder="¿On-line o Presencial?"
              {...register("opcion")}
            />
            <select id="aula" {...register("Aula", { required: true })}>
              <option value="">Seleccione Aula</option>
              <option value="Aula 1">Aula 1</option>
              <option value="Aula 2">Aula 2</option>
              <option value="Aula 3">Aula 3</option>
              <option value="Aula 4">Aula 4</option>
              <option value="Aula Virtual">Aula Virtual</option>
            </select>
            {errors.aula && <p>{errors.aula.message}</p>}
            <input
              type="number"
              name="precio"
              placeholder="Precio del curso"
              {...register("precio")}
            />
            {errors.precio && <p>{errors.precio.message}</p>}

            <input
              type="file"
              name="foto"
              id="foto"
              {...register("foto", {
                onChange: (e) => {
                  subeImagen(e);
                },
              })}
            />
            {errors.foto && <p>{errors.foto.message}</p>}

            <input type="submit" value="Crear Curso" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;