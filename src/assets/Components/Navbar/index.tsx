import "./index.css";
import { MdOutlineWaterDrop } from "react-icons/md";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="container-nav ">
      <div>
        <a href="#" className="fs-4 fw-bold text-white text-decoration-none">
          EA
        </a>
      </div>

      <div className="d-flex align-items-center gap-3">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white disabled" aria-disabled="true">
              Contact
            </a>
          </li>
        </ul>
        <MdOutlineWaterDrop size={24} style={{ color: "white" }} />
        <button type="button" className="btn btn-primary">
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
