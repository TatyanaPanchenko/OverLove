import "./Firstscreen.scss";
import firstIcon from "../../assets/Firstscreen/firstIcon.svg";
import secondIcon from "../../assets/Firstscreen/secondIcon.svg";
import thirdtIcon from "../../assets/Firstscreen/thirdIcon.svg";
import FirstscreenItem from "./FirstscreenItem/FirstscreenItem";
export default function Firstscreen() {
  return (
    <section className="firstscreen">
      <div className="container">
        <div className="firstscreen-wrapper">
          <h1 className="firstscreen-caption">Listen To The Beat Of The Web</h1>
          <div className="firstscreen-subtitle">
            First template from series templates to design web pages, using
            components system
          </div>
          <div className="firstscreen-button">Let’s Go</div>
        </div>
        <h3 className="firstscren-title">How it works</h3>
        <div className="firstscreen-features">
          <FirstscreenItem
            icon={firstIcon}
            title="Read it"
            description="Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          />
          <FirstscreenItem
            icon={secondIcon}
            title="Apply"
            description="Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore."
          />
          <FirstscreenItem
            icon={thirdtIcon}
            title="Multiply"
            description="Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore  orem."
          />
        </div>
      </div>
    </section>
  );
}
