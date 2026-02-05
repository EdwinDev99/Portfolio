import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { MdOutlineWaterDrop } from "react-icons/md";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md sticky-top container-nav">
      <div className="container d-flex justify-content-between align-items-center">
        <a
          href="#"
          className="navbar-brand fs-4 fw-bold text-primary text-decoration-none"
        >
          EA.
        </a>

        {/* Ícono móvil + botón hamburguesa */}
        <div className="d-flex align-items-center d-md-none">
          // esto es para poner modo claro y oscuro
          {/* <MdOutlineWaterDrop
            size={22}
            style={{ color: "white" }}
            className="me-2"
          /> */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes size={24} color="white" />
            ) : (
              <FaBars size={24} color="white" />
            )}
          </button>
        </div>

        {/* Contenido del menú */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto d-flex align-items-start gap-md-3 text-center">
            <li className="nav-item">
              <a
                className="nav-link text-white active"
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            {/* Ícono solo visible en desktop */}
            {/* <li className="nav-item d-none d-md-flex align-items-center">
              <MdOutlineWaterDrop
                size={22}
                style={{ color: "white" }}
                className="m-2"
              />
            </li>

            <li className="nav-item">
              <button type="button" className="btn btn-primary mt-2 mt-md-0">
                Resume
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
