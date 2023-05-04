import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
/* import { Image } from "cloudinary-react"; // ? Instalar cloudinary-react e importar el/los componentes necesarios
 */
const Peliculas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*   const [urlImagen, setUrlImagen] = useState(""); // ? Añadir para gestionar imágenes
   */
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

  /*   const subeImagen = (e) => {
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
  }; */

  return (
    <div className="temp">
      {/*       <Image
        cloudName="franio"
        // ! Muestra una de las imágenes que tengo en mi colección
        publicId={urlImagen} // ? Indicar la URL de la imagen en CLoudinary
      /> */}
      <div className="Form">
        <div className="title">Listado de películas</div>
        <div className="inputs">
          <form className="searchBar" onSubmit={handleSubmit(gestorFormulario)}>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="nombre"
              placeholder="nombre película"
              {...register("nombre")}
            />
            {errors.nombre && <p>{errors.nombre.message}</p>}

            <div className="submit">
              <input
                type="submit"
                id="submit"
                value="buscar"
                onClick={(e) => handleSubmit(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Peliculas;
