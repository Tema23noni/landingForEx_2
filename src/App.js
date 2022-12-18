import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import HighStandart from "./Components/HighStandart/HighStandart";
import Main from "./Components/Main/Main";
import MakeMobile from "./Components/MakeMobile/MakeMobile";
import OurProjects from "./Components/OurProjects/OurProjects";
import OurWorks from "./Components/OurWorks/OurWorks";
import VideoWork from "./Components/VideoWork/VideoWork";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MakeMobile/>
      <HighStandart/>
      <OurWorks/>
      <OurProjects/>
      <VideoWork/>
      <Contact/>
    </div>
  );
}

export default App;
