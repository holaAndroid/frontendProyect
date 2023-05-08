// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { Image } from "cloudinary-react"; // ? Instalar cloudinary-react e importar el/los componentes necesarios

const Alquiler = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [urlImagen, setUrlImagen] = useState(""); // ? Añadir para gestionar imágenes

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
        process.env.REACT_APP_BACKEND_URL + "/peliculas",
        {
          titulo: data.nombre,
          usuario: extraerDatosDeUsuario()[1],
          anyo: data.anyo,
          duration: data.duration,
          genero: data.genero,
        },
        {
          headers: {
            Authorization: "Bearer " + extraerDatosDeUsuario()[0], // En los headers van 'Bearer ' + token recibido
          },
        }
      )
      .then((response) => {
        console.log("Todo correcto", response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // const subeImagen = (e) => {
  //   const imagen = e.target.files[0];
  //   console.log(imagen);

  //   const formImagen = new FormData();
  //   formImagen.append("file", imagen);
  //   formImagen.append("upload_preset", "ddcu4b7d");

  //   axios
  //     .post(
  //       "https://api.cloudinary.com/v1_1/dzfi2sk1i/image/upload",
  //       formImagen
  //     )
  //     // ? Añadir setUrlImagen para cargar la URL de la imagen en Cloudinary
  //     .then((res) => {
  //       setUrlImagen(res.data.url);
  //       console.log(urlImagen);
  //     });
  // };

  return (
    <div className="temp">
      {/* <Image
        cloudName="franio"
        // ! Muestra una de las imágenes que tengo en mi colección
        publicId={urlImagen} // ? Indicar la URL de la imagen en CLoudinary
      /> */}
      <div className="Form">
        <div className="title">Alquiler de película</div>
        <div className="inputs">
          <form className="formita" onSubmit={handleSubmit(gestorFormulario)}>
            <input
              type="text"
              name="usuario"
              placeholder="nombre usuario"
              {...register("usuario")}
            />
            {errors.nombre && <p>{errors.nombre.message}</p>}

            {errors.pelicula && <p>{errors.pelicula.message}</p>}
            <input
              type="text"
              name="opcion"
              placeholder="¿digital o 3d?"
              {...register("opcion")}
            />
            <select id="aula" {...register("film", { required: true })}>
              <option value="">Seleccione una opción</option>
              <option value="film 1">Digital audio Dolby atoms</option>
              <option value="film 2">Digital audio Dolby Digital</option>
              <option value="film 3">Digital audio DTS </option>
              <option value="film 4">Digital 3D</option>
              <option value="film streaming">Digital Reedición</option>
            </select>
            {errors.film && <p>{errors.film.message}</p>}
            <input
              type="String"
              name="name"
              placeholder="Título de la película"
              {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
            {/* 
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
            {errors.foto && <p>{errors.foto.message}</p>} */}

            <div className="submit">
              <input type="submit" value="Guardar datos" id="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Alquiler;
