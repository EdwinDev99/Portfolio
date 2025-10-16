import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import "./index.css";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Columna izquierda */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h5 className="text-primary fw-bold">EA.</h5>
            <p className="footer-text mb-0">
              Building elegant digital solutions with a focus on user experience
              and technical excellence.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end mb-2">
              <a href="https://github.com/EdwinDev99" target="_blank">
                <TbBrandGithub color="#4B5563" className="fs-3 mx-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/edwin-ayerbe-749548210/"
                target="_blank"
              >
                <FiLinkedin color="#4B5563" className="fs-3 mx-2" />
              </a>
              <a href="mailto:edwin@example.com">
                <CgMail color="#4B5563" className="fs-3 mx-2" />
              </a>
            </div>
            <p className="footer-text mb-0">
              © 2025 Edwin Andres Ayerbe | Built with React and Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
