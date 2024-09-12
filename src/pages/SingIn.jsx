import React, { useEffect } from "react";

import RegistrationForm from "../components/RegistrationForm";
import Swal from "sweetalert2";

const SingIn = () => {
  let namePage = "Registrarse";
  useEffect(() => {
    document.title = `Web Shop -  ${namePage}`;
  }, []);

  // Función para registrar usuario.
  const registerUser = async (newUser) => {
    console.log("llego infor", newUser);

    try {
      const URL = import.meta.env.VITE_CLIENT;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Convierte el objeto en un string para enviar al backend.
        body: JSON.stringify(newUser),
      };
      // Petición para crear usuario
      const respuesta = await fetch(URL, options);
      if (respuesta.status !== 201) {
        throw new Error(
          `Ocurrio un error al crear usuario ${respuesta.status}`
        );
      }
      // usuario creado si el status es 201
      const userCreated = await respuesta.json();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${userCreated.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(userCreated);
    } catch (error) {
      console.error(`[registerUser]: ${error}`);
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Ocurrió un error al crear el usuario. Por favor, intenta de nuevo.",
      });
    }
  };

  return (
    <>
      <div className=" form-grup bg-body-tertiary border border-dark rounded-3 mt-5">
        <h1 className="mt-4 text-center">Resgistrate</h1>
        <p className="text-center">
          Registrate y sé el primero en conocer los últimos lanzamientos.
        </p>

        <RegistrationForm registerUser={registerUser} />
      </div>
    </>
  );
};

export default SingIn;
