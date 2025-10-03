import Home from "./assets/Components/Home";
import Navbar from "./assets/Components/Navbar";
import "./App.css";
import Aboutme from "./assets/Components/About";
import Projects from "./assets/Components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects />
    </div>
  );
}

export default App;
