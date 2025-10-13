import "./index.css";

type Props = {};

function Skills({}: Props) {
  return (
    <div id="skills" className="container container-skills">
      <div>
        <h1 className="text-white d-inline-block border-bottom border-3 border-primary pb-1">
          Skills
        </h1>
        <p className="text-skills mt-1">
          Frontend Developer skilled in building responsive interfaces,
          <br />
          managing application state, and creating efficient user experiences.
        </p>
      </div>

      <div className="skills-flex">
        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
        />
        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
        />
        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
        />
        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
        />

        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />

        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
        />

        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
        />

        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
        />

        <img
          className="skill-icons bg-white"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
        />

        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />

        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg"
        />

        <img
          className="skill-icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chakraui/chakraui-original.svg"
        />
      </div>
    </div>
  );
}

export default Skills;
