import React, { useState } from "react";

const LoginForm = ({ startAccess }) => {
  const formData = {
    email: "",
    password: "",
  };
  // estado del formulario.
  const [formStatus, setFormStatus] = useState(formData);
  // estado para manejar errores
  const [errors, setErrors] = useState({});

  // función para capturar los datos del formulario
  const handleChange = (e) => {
    const credentials = {
      ...formStatus,
      [e.target.name]: e.target.value,
    };
    // Actualizar el estado del formulario
    setFormStatus(credentials);
  };
  // función para validar el formulario (Validar formulario)
  const validateForm = () => {
    const formErrors = {};
    if (!formStatus.email) {
      formErrors.email = "El correo es obligatorio";
    }

    if (!formStatus.password) {
      formErrors.password = "La contraseña es obligatoria";
    }
    return formErrors;
  };

  // función para enviar la info de credenciales al backend (enviar información)
  const handleSubmit = (e) => {
    // Prevenir recarga de la pagina.
    e.preventDefault();

    // Validar el formulario antes de enviar la información (Errores de validación)
    const validationErrors = validateForm();
    // Object.keys(): Extrae las claves de un objeto y las convierte en un array. (Comprueba si hay errores).
    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores, no se envía el formulario y se actualizan los errores
      setErrors(validationErrors);
      return;
    }
    // Si no hay errores, enviar la información
    startAccess(formStatus);
  };
  return (
    <>
      <form className="row g-1" onSubmit={handleSubmit}>
        {/* Correo */}
        <div className="text-center">
          <label htmlFor="lbl-email" className="form-label"></label>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="email"
            id="email"
            value={formStatus.email}
            onChange={handleChange}
            placeholder="Ingrese su correo"
          />
          {errors.email ? (
            <small className="form-text text-danger">{errors.email}</small>
          ) : (
            ""
          )}
        </div>

        {/* contraseña */}
        <div className="text-center ">
          <label htmlFor="lbl-password" className="form-label"></label>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="password"
            id="password"
            value={formStatus.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
          />
          {errors.password ? (
            <small className="form-text text-danger">{errors.password}</small>
          ) : (
            ""
          )}
        </div>

        {/* Botón */}
        <div className=" text-center">
          <button type="submit" className="btn btn-dark mt-4 mb-4 w-50">
            Iniciar sesión
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
