import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LogIn = () => {
  let namePage = "Iniciar sesión";
  // redireccionando
  const redirect = useNavigate();
  useEffect(() => {
    document.title = `Web Shop -  ${namePage}`;
  }, []);

  // función para  iniciar seción (iniciar acceso)
  const startAccess = async (credential) => {
    try {
      const url = import.meta.env.VITE_LOGIN;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Convierte el objeto en un string para enviar al backend.
        body: JSON.stringify(credential),
      };
      // Petición para iniciar sesión
      const respuesta = await fetch(url, options);

      if (respuesta.status !== 200) {
        throw new Error(
          `Ocurrio un error al iniciar sesion, ${respuesta.status}`
        );
      }

      const token = respuesta.headers.get("Authorization");
      // Almacenar el token en localStorage
      localStorage.setItem("token", token);
      // Redirige al usuario a la pagina de inicio sin recargar la página
      redirect("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo.",
      });
    }
  };
  return (
    <>
      <div className=" form-grup bg-body-tertiary border border-dark rounded-3 mt-5">
        <h1 className="mt-4 text-center">WebShop</h1>

        <h2 className="w-50 mx-auto mt-5 mb-0">Iniciar sesión</h2>

        <LoginForm startAccess={startAccess} />
      </div>
      <div className=" form-grup bg-body-tertiary border border-dark rounded-3 mt-3 text-center">
        <p className="mt-3">
          <Link to="#">¿Olvide mi contraseña?</Link>
        </p>
        <p>
          ¿No tienes una cuenta? <Link to="/registrarse">Registrate</Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;
