import "./Slider.scss";
import sliderBg from "../../assets/Slider/sliderBg.jpg";
export default function Slider() {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider-wrapper">
          <img src={sliderBg} alt="slider" />
          <div className="slider-inner">
            <h2 className="slider-title">Enjoy this product</h2>
            <div className="slider-text">
              This project required a huge amount of hours but sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliquat enim ad minim.
            </div>
            <div className="slider-button">Sign Up</div>
          </div>
        </div>
      </div>
    </section>
  );
}
