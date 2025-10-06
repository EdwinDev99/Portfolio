import Home from "./assets/Components/Home";
import Navbar from "./assets/Components/Navbar";
import Aboutme from "./assets/Components/About";
import Projects from "./assets/Components/Projects";
import Skills from "./assets/Components/skills";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
