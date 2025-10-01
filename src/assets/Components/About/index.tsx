import "./index.css";
import AboutMeCard from "./AboutMeCard";
import edwinayerbe from "../../imgs/edwinayerbe.png";
import { FaRegFileLines } from "react-icons/fa6";
import { IoSchoolOutline } from "react-icons/io5";
import { PiBagSimpleBold } from "react-icons/pi";

type Props = {};

function Aboutme({}: Props) {
  return (
    <div id="about" className="container ">
      <div className="about-me">
        <div className="m-5">
          <h1> About Me</h1>

          <h4 className="d-flex align-items-center  gap-2">
            <FaRegFileLines color="#3B82F6" size="20px" />
            Bio
          </h4>
          <p className="text-aboutme">
            I am passionate about technology and focused on building my career
            in frontend development. With dedication, curiosity, and a
            commitment to continuous learning, I adapt quickly to new challenges
            and enjoy contributing proactively to team projects.
          </p>

          <div className="card-aboutme">
            <AboutMeCard
              contents={[
                {
                  icon: <IoSchoolOutline color="#3B82F6" size={20} />,
                  title: "Education",
                  subtitle: "Colombia,Sena",
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
        <div className="profile">
          <img src={edwinayerbe} alt="img" className="image-profile" />
          <h3>Edwin ayerbe</h3>
          <p>Front-End Developer</p>
          <button className="btn btn-primary">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
