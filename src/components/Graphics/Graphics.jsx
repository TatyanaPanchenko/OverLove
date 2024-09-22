import "./Graphics.scss";
import firstPhotoGraphics from "../../assets/Graphics/firstPhotoGraphics.png";
import secondPhotoGraphics from "../../assets/Graphics/secondPhotoGraphics.png";
import thirdPhotoGraphics from "../../assets/Graphics/thirdPhotoGraphics.png";
import fourthPhotoGraphics from "../../assets/Graphics/fourthPhotoGraphics.png";
import fifthPhotoGraphics from "../../assets/Graphics/fifthPhotoGraphics.png";

export default function Graphics() {
  return (
    <section className="graphics">
      <div className="graphics-container-images">
        <div className="container">
          <div className="graphics-element"></div>
          <div className="graphics-wrapper">
            <h2 className="graphics-title">Unsplash graphic</h2>
            <div className="graphics-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquat enim
              ad minim.
            </div>
          </div>
        </div>
        <div className="graphics-img">
          <img src={firstPhotoGraphics} alt="graphics-image" />
          <img src={secondPhotoGraphics} alt="graphics-image" />
          <img src={thirdPhotoGraphics} alt="graphics-image" />
          <img src={fourthPhotoGraphics} alt="graphics-image" />
          <img src={fifthPhotoGraphics} alt="graphics-image" />
        </div>
      </div>
    </section>
  );
}
