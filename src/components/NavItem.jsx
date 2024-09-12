import { NavLink } from "react-router-dom";

const NavItem = ({ obj }) => {
  // Función cambio de color de los items cuando esta activo
  const colorChange = ({ isActive }) =>
    isActive
      ? {
          backgroundColor: "#0000001a",
          borderRadius: "10px",
          fontWeight: "bold",
        }
      : {};

  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to={obj.ruta} style={colorChange}>
          {obj.nombre}
        </NavLink>
      </li>
    </>
  );
};

export default NavItem;
