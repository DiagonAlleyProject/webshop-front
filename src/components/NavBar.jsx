import { Link, NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import NavItemDropdown from "./NavItemDropdown";
import { menuItems } from "../constants/menuItems";

// Barra de navegación.
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WebShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Componente item */}
              {/* Recorro los items que quiero que se repita */}
              {menuItems.map((item, idx) => (
                <NavItem obj={item} key={idx + item.nombre} />
              ))}

              {/* Componente de menu despegable */}
              <NavItemDropdown nombreItem2="Mi perfil" />
            </ul>

            {/* buscador */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-secondary me-3 btn-sm"
                type="submit"
              >
                <img
                  src="../../img/icon-saerch.png"
                  alt=""
                  style={{ width: "25px" }}
                />
              </button>
            </form>

            {/* Boton iniciar sesión */}
            <div className="d-grid gap-1 d-md-flex justify-content-md-end">
              <NavLink to="/iniciarsesion">
                <button className="btn btn-dark">Iniciar sesión</button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
