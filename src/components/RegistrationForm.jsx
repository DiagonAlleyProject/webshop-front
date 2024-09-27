import { useState } from "react";

// Formulario de registro
const RegistrationForm = ({ registerUser }) => {
  // datos que va tener inicalmente el estado
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

    // Se envia el info del formulario a la función de registro.
    registerUser(form);

    handleReset();
  };

  // función para resetear formulario
  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <>
      <form className="row g-1 " onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className=" ">
          <label htmlFor="lbl-name" className="form-label"></label>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
        </div>

        {/* Apellido */}
        <div className=" ">
          <label htmlFor="lbl-lastName" className="form-label"></label>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="lastName"
            id="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Ingrese su apellido"
          />
        </div>

        {/* Dirección */}
        <div className=" ">
          <label htmlFor="lbl-address" className="form-label"></label>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Ingrese su dirección"
          />
        </div>

        {/* DNI */}
        <div className=" ">
          <label htmlFor="lbl-idCardNumber" className="form-label"></label>
          <input
            type="number"
            className="form-control w-50 mx-auto"
            name="idCardNumber"
            id="idCardNumber"
            value={form.idCardNumber}
            onChange={handleChange}
            placeholder="Ingrese su DNI"
          />
        </div>

        {/* Correo */}
        <div className=" ">
          <label htmlFor="lbl-email" className="form-label"></label>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ingrese su correo"
          />
        </div>

        {/* contraseña */}
        <div className=" ">
          <label htmlFor="lbl-password" className="form-label"></label>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
          />
        </div>

        {/* Botón */}
        <div className=" text-center">
          <button type="submit" className="btn btn-dark mt-4 mb-4 w-50">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
