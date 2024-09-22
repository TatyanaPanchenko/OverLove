import "./Download.scss";
import FormSignup from "../FormSignup/FormSignup";

export default function Download() {
  return (
    <section className="download">
      <div className="container">
        <div className="download-wrapper">
          <div className="download-capture">Download the future </div>
          <div className="download-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim.
          </div>
          <FormSignup />
          <div className="download-social">
            <a className="download-behance" href="https://www.behance.net/"></a>
            <a className="download-drrrible" href="https://dribbble.com/"></a>
            <a
              className="download-instagram"
              href="https://www.instagram.com/"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
