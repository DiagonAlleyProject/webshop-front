import { useState } from "react";

// Formulario de registro
const RegistrationForm = ({ registerUser }) => {
  // datos que va tener inicialmente el estado
  const initialForm = {
    id: null,
    name: "",
    lastName: "",
    address: "",
    idCardNumber: "",
    email: "",
    password: "",
  };
  // estado del formulario
  const [form, setForm] = useState(initialForm);
  // estado para manejar errores
  const [errors, setErrors] = useState({});

  // función para validar el formulario (Validar formulario)
  const validateForm = () => {
    const formErrors = {};
    if (!form.name) {
      formErrors.name = "El nombre es obligatorio";
    }
    if (!form.lastName) {
      formErrors.lastName = "El apellido es obligatorio";
    }
    if (!form.address) {
      formErrors.address = "La dirección es obligatoria";
    }
    if (!form.idCardNumber) {
      formErrors.idCardNumber = "El DNI es obligatorio";
    }
    if (!form.email) {
      formErrors.email = "El correo es obligatorio";
    }
    if (!form.password) {
      formErrors.password = "La contraseña es obligatoria";
    }
    return formErrors;
  };

  // Capturando información de los input
  const handleChange = (e) => {
    // Se crea un nuevo objeto que va tener lo que ya tenia el estado + lo que el usuarui esta escribiendo.
    const obj = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(obj);
  };

  // función para enviar la info al backend
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

    // Si no hay errpres Se envia el info del formulario a la función de registro.
    registerUser(form);

    // Resetear formulario
    handleReset();
  };

  // función para resetear formulario
  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <>
      <form className="row g-1 text-center" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className=" ">
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
          {errors.name ? (
            <small className="form-text text-danger ">{errors.name}</small>
          ) : (
            ""
          )}
        </div>

        {/* Apellido */}
        <div className="mt-3 ">
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="lastName"
            id="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Ingrese su apellido"
          />
          {errors.lastName ? (
            <small className="form-text text-danger ">{errors.lastName}</small>
          ) : (
            ""
          )}
        </div>

        {/* Dirección */}
        <div className=" mt-3">
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Ingrese su dirección"
          />
          {errors.address ? (
            <small className="form-text text-danger ">{errors.address}</small>
          ) : (
            ""
          )}
        </div>

        {/* DNI */}
        <div className="mt-3 ">
          <input
            type="number"
            className="form-control w-50 mx-auto"
            name="idCardNumber"
            id="idCardNumber"
            value={form.idCardNumber}
            onChange={handleChange}
            placeholder="Ingrese su DNI"
          />
          {errors.idCardNumber ? (
            <small className="form-text text-danger ">
              {errors.idCardNumber}
            </small>
          ) : (
            ""
          )}
        </div>

        {/* Correo */}
        <div className=" mt-3">
          <input
            type="email"
            className="form-control w-50 mx-auto"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ingrese su correo"
          />
          {errors.email ? (
            <small className="form-text text-danger ">{errors.email}</small>
          ) : (
            ""
          )}
        </div>

        {/* contraseña */}
        <div className="mt-3 ">
          <input
            type="password"
            className="form-control w-50 mx-auto"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
          />
          {errors.password ? (
            <small className="form-text text-danger ">{errors.password}</small>
          ) : (
            ""
          )}
        </div>

        {/* Botón */}
        <div className=" text-center">
          <button type="submit" className="btn btn-dark mt-3 mb-4 w-50">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
