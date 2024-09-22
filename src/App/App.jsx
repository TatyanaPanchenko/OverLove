import Header from "../components/Header/Header";
import Firstscreen from "../components/Firstscreen/Firstscreen";
import Reviews from "../components/Reviews/Reviews";
import Graphics from "../components/Graphics/Graphics";
import Process from "../components/Process/Process";
import Slider from "../components/Slider/Slider";
import Team from "../components/Team/Team";
import Download from "../components/Download/Download";
import Footer from "../components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Firstscreen />
      <Reviews />
      <Graphics />
      <Process />
      <Slider />
      <Team />
      <Download />
      <Footer />
    </>
  );
}

export default App;
