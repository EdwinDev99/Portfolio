import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import "./index.css";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="footer">
      <div>
        <h5 className="text-primary">EA.</h5>
        <p className="footer-text">
          Building elegant digital solutions with a focus on user experience and
          technical excellence.
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-end">
          <a href="https://github.com/EdwinDev99" target="_banck">
            <TbBrandGithub color="#4B5563" className="fs-3  m-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/edwin-ayerbe-749548210/"
            target="_blank"
          >
            <FiLinkedin color="#4B5563" className="fs-3  m-1" />
          </a>
          <CgMail color="#4B5563" className="fs-3 m-1" />
        </div>
        <div>
          <p className="footer-text">
            © 2025 Edwin Andres Ayerbe | Built with React and Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
