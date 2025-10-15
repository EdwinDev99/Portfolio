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
    <div
      id="contact"
      className="container text-white py-5 min-vh-100 d-flex flex-column justify-content-center"
    >
      <div className="mb-4">
        <h1>Get in touch</h1>
        <p className="text-contact">
          Have a question or want to work together? Feel free to drop me a
          message. I'd love to hear from you!
        </p>
      </div>

      <div className="row align-items-start gy-4">
        <div className="col-12 col-md-6">
          <h3>Contact information</h3>
          <p className="text-contact">
            Fill up the form and I'll get back to you as soon as possible.
          </p>

          <div className="mb-3">
            <h4>
              <AiOutlineMail color="#3B82F6" size="20px" /> Email
            </h4>
            <p className="text-contact">Edwindev99@gmail.com</p>
          </div>

          <div className="mb-3">
            <h4>
              <FiPhone color="#3B82F6" size="20px" /> Phone
            </h4>
            <p className="text-contact">+351 937525178</p>
          </div>

          <div className="mb-3">
            <h4>
              <IoLocationOutline color="#3B82F6" size="20px" /> Location
            </h4>
            <p className="text-contact">Portugal</p>
          </div>

          <h5>Connect with me</h5>
          <div className="d-flex align-items-center gap-3">
            <a
              href="https://github.com/EdwinDev99"
              target="_blank"
              className="icons-contact"
              aria-label="GitHub"
            >
              <TbBrandGithub color="#4B5563" className="fs-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/edwin-ayerbe-749548210/"
              target="_blank"
              className="icons-contact"
              aria-label="LinkedIn"
            >
              <FiLinkedin color="#4B5563" className="fs-5" />
            </a>

            <a
              href="mailto:Edwindev99@gmail.com"
              className="icons-contact"
              aria-label="Email"
            >
              <CgMail color="#4B5563" className="fs-5" />
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="col-12 col-md-6">
          <form>
            <div className="form-container">
              <div className="row g-3">
                <div className="col-12 col-md-6 d-flex flex-column">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    className="input-contact"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-12 col-md-6 d-flex flex-column">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    className="input-contact"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="d-flex flex-column mt-3">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  className="input-contact"
                  type="text"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="d-flex flex-column mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="input-contact message"
                  placeholder="Your message here..."
                  rows={6}
                />
              </div>

              <button className="btn btn-primary w-100 mt-4" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
