import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import "./index.css";

type Props = {};

function Contact({}: Props) {
  return (
    <div id="contact" className="container container-contact">
      <div>
        <h1>Get in touch</h1>
        <p className="text-contact">
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </p>
      </div>
      <div className="contact-content">
        <div>
          <h3>Contact information</h3>
          <p className="text-contact">
            Fill up the form and I'll get back to you as soon as possible.
          </p>
          <h4>
            <AiOutlineMail color="#3B82F6" size="20px" /> Email
          </h4>
          <p className="text-contact">Edwindev99@gmail.com</p>
          <h4>
            <FiPhone color="#3B82F6" size="20px" /> Phone
          </h4>
          <p className="text-contact">+351 937525178</p>
          <h4>
            <IoLocationOutline color="#3B82F6" size="20px" /> Location
          </h4>
          <p className="text-contact">Portugal</p>
          <h5>Connect with me</h5>
          <div className="d-flex align-items-center gap-3">
            <a
              href="https://github.com/EdwinDev99"
              target="_blank"
              className="icons-contact"
            >
              <TbBrandGithub color="#4B5563" className="fs-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/edwin-ayerbe-749548210/"
              target="_blank"
              className="icons-contact"
            >
              <FiLinkedin color="#4B5563" className="fs-5" />
            </a>

            <a className="icons-contact">
              <CgMail color="#4B5563" className="fs-5" />
            </a>
          </div>
        </div>
        <div>
          <form>
            <div className="form">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column ">
                  <label htmlFor="">Your Name</label>
                  <input
                    className="input-contact"
                    type="text"
                    placeholder="john Doe"
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label htmlFor="">Your Email</label>
                  <input
                    className="input-contact"
                    type="text"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="d-flex flex-column ">
                <label htmlFor="">Subject</label>
                <input
                  className="input-contact"
                  type="email"
                  placeholder="How can i help you ?"
                />
              </div>
              <div className="d-flex flex-column ">
                <label htmlFor="">Message</label>
                <input
                  className="input-contact message"
                  placeholder="Your message here..."
                  type="text"
                />
              </div>
              <button className="btn btn-primary w-100  ">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
