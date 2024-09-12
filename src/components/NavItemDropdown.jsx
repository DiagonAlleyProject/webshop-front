import { Link } from "react-router-dom";
import { menuDropdown } from "../constants/menuDropdown";
import Dropdown from "./Dropdown";

const NavItemDropdown = ({ nombreItem2 }) => {
  return (
    <>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {nombreItem2}
        </Link>
        <ul className="dropdown-menu">
          {/* Recorro los items que quiero que se repitan */}
          {menuDropdown.map((item, idx) => (
            <Dropdown obj={item} key={idx + item.nombre} />
          ))}
          {/* <li>
            <hr className="dropdown-divider" />
          </li> */}
        </ul>
      </li>
    </>
  );
};

export default NavItemDropdown;
