import ProcessItem from "./ProcessItem/ProcessItem";
import "./Process.scss";
import firstIcon from "../../assets/Process/firstIcon.svg";
import secondIcon from "../../assets/Process/secondIcon.svg";
import thirdIcon from "../../assets/Process/thirdIcon.svg";
import fourthIcon from "../../assets/Process/fourthIcon.svg";
import fifthIcon from "../../assets/Process/fifthIcon.svg";
import sixthIcon from "../../assets/Process/sixthIcon.svg";

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <h2 className="process-title">Speed up your design process</h2>
        <div className="process-wrapper">
          <ProcessItem
            color="#ffd84e"
            icon={firstIcon}
            tech="Variants"
            description="Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
          />
          <ProcessItem
            color="#FB6363 "
            icon={secondIcon}
            tech="Components"
            description="Sed do eiusmod tempor incididunt ut consectetur adipisicing elit,do eiusmod tempor incididunt ut labore et dolore"
          />
          <ProcessItem
            color="#A66DF5"
            icon={thirdIcon}
            tech="Auto Layout"
            description="Dor sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma iusmod"
          />
          <ProcessItem
            color="#6DD6B0"
            icon={fourthIcon}
            tech="Atomic Design"
            description="Adipisicing elit, orem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna "
          />
          <ProcessItem
            color="#708CF0"
            icon={fifthIcon}
            tech="Animated"
            description="Morem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
          />
          <ProcessItem
            color="#A02E8E"
            icon={sixthIcon}
            tech="Responsive"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
          />
        </div>
      </div>
    </section>
  );
}
