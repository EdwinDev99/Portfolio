import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import "./index.css";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="container container-contact">
      <div>
        <h1>Get in touch</h1>
        <p>
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </p>
      </div>
      <div className="contact-content">
        <div>
          <h3>Contact information</h3>
          <p>Fill up the form and I'll get back to you as soon as possible.</p>
          <h4>Email</h4>
          <p>Edwindev99@gmail.com</p>
          <h4>Phone</h4>
          <p>+351 937525178</p>
          <h4>Location</h4>
          <p>Portugal</p>
          <h3>Connect with me</h3>
          <a href="https://github.com/EdwinDev99" target="_banck">
            <TbBrandGithub color="#393456" className="fs-3  m-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/edwin-ayerbe-749548210/"
            target="_blank"
          >
            <FiLinkedin color="#393456" className="fs-3  m-1" />
          </a>
          <CgMail color="#393456" className="fs-3 m-1" />
        </div>
        <div>
          <form>
            <div className="form">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column ">
                  <label htmlFor="">Your name</label>
                  <input type="text" />
                </div>
                <div className="d-flex flex-column ">
                  <label htmlFor="">Your Email</label>
                  <input type="text" />
                </div>
              </div>

              <div className="d-flex flex-column ">
                <label htmlFor="">Subject</label>
                <input type="email" />
              </div>
              <div className="d-flex flex-column ">
                <label htmlFor="">message</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
