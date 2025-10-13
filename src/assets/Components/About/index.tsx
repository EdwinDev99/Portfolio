import "./index.css";
import AboutMeCard from "./AboutMeCard";
import edwinayerbe from "../../imgs/edwinayerbe.png";
import { FaRegFileLines } from "react-icons/fa6";
import { IoSchoolOutline } from "react-icons/io5";
import { PiBagSimpleBold } from "react-icons/pi";

type Props = {};

function Aboutme({}: Props) {
  return (
    <div id="about" className="container text-white">
      <div className="min-vh-100 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4">
        <div className="m-3 m-lg-5">
          <h1 className="fw-bold mb-3">About Me</h1>

          <h4 className="d-flex align-items-center justify-content-start gap-2 mb-3">
            <FaRegFileLines color="#3B82F6" size="20px" />
            Bio
          </h4>

          <p className="text-aboutme">
            I am passionate about technology and focused on building my career
            in frontend development. With dedication, curiosity, and a
            commitment to continuous learning, I adapt quickly to new challenges
            and enjoy contributing proactively to team projects.
          </p>

          <div className="d-flex flex-column flex-md-row gap-4">
            <AboutMeCard
              contents={[
                {
                  icon: <IoSchoolOutline color="#3B82F6" size={20} />,
                  title: "Education",
                  subtitle: "Colombia, Sena",
                  text: "Systems technician 2020-2022",
                },
                {
                  subtitle: "freeCodeCamp",
                  text: "Front-end developer",
                },
              ]}
            />
            <AboutMeCard
              contents={[
                {
                  icon: <PiBagSimpleBold color="#3B82F6" size={20} />,
                  title: "Experience",
                  subtitle: "Skandia",
                  text: "Systems technician 2020-2022",
                },
                {
                  subtitle: "Flahmingo",
                  text: "Manual QA Tester for web apps with hands-on experience in frontend UI updates and minor components 2022-2021",
                },
              ]}
            />
          </div>
        </div>

        {/* Perfil lateral */}
        <div className="profile">
          <img src={edwinayerbe} alt="img" className="image-profile" />
          <h3 className="mt-3">Edwin Ayerbe</h3>
          <p className="text-secondary">Front-End Developer</p>
          <button className="btn btn-primary w-100 w-lg-auto">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
