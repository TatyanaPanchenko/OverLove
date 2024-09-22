import logo from "../../assets/Header/logo.svg";
import burgerMenu from "../../assets/Icons/menu.svg";
import "./Header.scss";
export default function Header() {
  return (
    <header className="header">
      {" "}
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation">
            <a className="burger-menu" href="#">
              <img src={burgerMenu} alt="menu" />
            </a>
            <nav className="menu">
              <a href="#" className="menu-link">
                How it Works
              </a>
              <a href="#" className="menu-link">
                Features
              </a>
              <a href="#" className="menu-link">
                Pricing
              </a>
              <a href="#" className="menu-link">
                Help
              </a>
              <a href="#" className="menu-link">
                Blog
              </a>
            </nav>
            <div className="profile">
              <a className="profile-login" href="#">
                Log In
              </a>
              <a className="profile-signup" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
