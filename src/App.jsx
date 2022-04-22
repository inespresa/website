import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Multimedia from "./components/multimedia/Multimedia";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { MultimediaData } from "./components/multimedia/MultimediaData";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <About />
        <Multimedia slides = {MultimediaData} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
