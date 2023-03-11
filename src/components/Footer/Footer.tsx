import About from "./About/About";
import Menu from "./Menu/Menu";
import "./Footer.css";
import Contacts from "./Contacts/Contacts";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__links">
          <div className="footer__left">
            <About />
            <Menu />
          </div>
          <Contacts />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
