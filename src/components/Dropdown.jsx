import { NavLink } from "react-router-dom";

const Dropdown = ({ obj }) => {
  // Función cambio de color de los items cuando esta activo
  const colorChange = ({ isActive }) =>
    isActive
      ? { backgroundColor: "#0000001a", borderRadius: "5px", color: "black" }
      : {};
  return (
    <>
      <li>
        <NavLink className="dropdown-item" to={obj.ruta} style={colorChange}>
          {obj.nombre}
        </NavLink>
      </li>
    </>
  );
};

export default Dropdown;
