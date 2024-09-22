import FormSignup from "../FormSignup/FormSignup";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-column">
            <div className="footer-caption">Product</div>
            <a href="#" className="footer-link">
              How it works
            </a>
            <a href="#" className="footer-link">
              Features
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
            <a href="#" className="footer-link">
              Testimonials
            </a>
          </div>
          <div className="footer-column">
            <div className="footer-caption">Product</div>
            <a href="#" className="footer-link">
              How it works
            </a>
            <a href="#" className="footer-link">
              Features
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
            <a href="#" className="footer-link">
              Testimonials
            </a>
          </div>
          <div className="footer-column">
            <div className="footer-caption">Product</div>
            <a href="#" className="footer-link">
              How it works
            </a>
            <a href="#" className="footer-link">
              Features
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
            <a href="#" className="footer-link">
              Testimonials
            </a>
          </div>
          <div className="footer-column">
            <div className="footer-caption">Product</div>
            <a href="#" className="footer-link">
              How it works
            </a>
            <a href="#" className="footer-link">
              Features
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
          </div>
          <div className="footer-signup">
            <div className="footer-caption">Newsletter</div>
            <div className="footer-text">Join our weekly maiiling list</div>
            <div className="footer-label">Name *</div>
            <FormSignup />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-documents">
            <a href="#">Terms and conditions</a>
            <a href="#">Legal</a>
            <a href="#">Pattents</a>
          </div>
          <div className="footer-design">Designed to be loved © 2008-2021</div>
        </div>
      </div>
    </footer>
  );
}
