// Home.tsx
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { motion } from "motion/react";
import "./index.css";

function Home() {
  return (
    <div
      id="home"
      className="container-fluid min-vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center p-2 p-md-5"
    >
      {/* Primera sección */}
      <section className="text-white mb-3 mb-md-0 col-12 col-md-6 col-lg-4 px-2 px-md-0">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary fs-6"
        >
          Hello! I'm
        </motion.span>
        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Edwin{" "}
          <motion.span
            className="text-primary"
            initial={{ backgroundSize: "0% 3px" }}
            animate={{ backgroundSize: "100% 3px" }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Ayerbe
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="fs-3 text-secondary"
        >
          Frontend Developer & Creative Coder
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="fs-6 fw-lighter p-1"
        >
          Building elegant solutions to complex problems with modern <br />
          technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="d-flex flex-wrap justify-content-start gap-2 "
        >
          <button className="btn btn-primary">Contact me</button>
          <button className="btn btn-dark">View Projects</button>
          <a href="https://github.com/EdwinDev99" target="_blank">
            <TbBrandGithub color="#4B5563" className="fs-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/edwin-ayerbe-749548210/"
            target="_blank"
          >
            <FiLinkedin color="#4B5563" className="fs-3" />
          </a>
          <CgMail color="#4B5563" className="fs-3" />
        </motion.div>
      </section>

      {/* Segunda sección */}
      <motion.section
        className="w-full max-w-md col-12 col-md-6 col-lg-4 px-2 px-md-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="code-card w-100">
          <div className="code-header">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
            <span className="filename">developer.ts</span>
          </div>
          <pre>
            <code>
              <span className="comment">// Software Engineer</span>
              {"\n"}
              <span className="keyword">const</span>{" "}
              <span className="variable">developer</span> ={" "}
              <span className="text-info">{"{"}</span>
              {"\n   "}
              <span className="contect">name:</span>{" "}
              <span className="string">'Edwin Ayerbe'</span>,{"\n   "}
              <span className="contect">skills:</span> [
              <span className="string">'React'</span>,{" "}
              <span className="string">'Node.js'</span>,{" "}
              <span className="string">'TypeScript'</span>],
              {"\n   "}
              <span className="contect">focuses:</span> [
              <span className="string">'Frontend'</span>,{" "}
              <span className="string">'UI/UX'</span>],
              {"\n   "}
              <span className="contect">learning:</span>{" "}
              <span className="string">'Always'</span>
              {"\n"}
              <span className="text-info">{"}"}</span>
            </code>
          </pre>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
