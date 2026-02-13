import CardProjects from "./CardProjects";
import mealFinder from "../../imgs/mealfinder.png";
import gamesale from "../../imgs/gamesale.png";
import delisopas from "../../imgs/delisopas.png";

import "./index.css";

function Projects() {
  return (
    <div id="projects" className="container container-project">
      <div>
        <h1 className="text-white d-inline-block border-bottom border-3 border-primary pb-1">
          Projects
        </h1>
        <p className="text-projects">
          Here are some of the projects I've worked on, showcasing my skills in
          <br />
          various technologies and problem domains.
        </p>
      </div>
      <div>
        <div className="d-flex flex-wrap justify-content-between gap-2">
          <CardProjects
            linkimg="https://edwindev99.github.io/Meal-Finder/"
            img={mealFinder}
            title="Meal-Finder"
            description="Responsive application that consumes an API to display real-time recipes. Features a stylish search bar and reusable components for clean, scalable code."
          >
            <a href="https://github.com/EdwinDev99/Meal-Finder" target="_blank">
              <button className="btn btn-primary">Git Hub</button>
            </a>
          </CardProjects>
          <CardProjects
            linkimg="https://deli-sopas-bogota-bafuwpv5v-edwin-ayerbes-projects.vercel.app/"
            img={delisopas}
            title="DeliSopas"
            description="A restaurant management application that handles customer orders, product management, and multiple payment methods. It allows staff to create and process orders and track completed sales in a summary view."
          >
            <a
              href="https://github.com/EdwinDev99/DeliSopas-React"
              target="_blank"
            >
              <button className="btn btn-primary">Git Hub</button>
            </a>
          </CardProjects>
          <CardProjects
            linkimg="https://edwindev99.github.io/react-ts-ejercicio/"
            img={gamesale}
            title="Game-Sale"
            description="Game Sale is your go-to site for finding the hottest video game deals from one API, while another API adds a playful touch with jokes to keep you entertained along the way."
          >
            <a
              href="https://github.com/EdwinDev99/react-ts-ejercicios"
              target="_blanck"
            >
              <button className="btn btn-primary">Git Hub</button>
            </a>
          </CardProjects>
        </div>
      </div>
    </div>
  );
}

export default Projects;
