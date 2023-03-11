import "./Header.css";
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <HeaderLogo />
            <Navbar />
          </div>
          <HeaderContacts />
        </div>
      </div>
    </header>
  );
};

export default Header;
