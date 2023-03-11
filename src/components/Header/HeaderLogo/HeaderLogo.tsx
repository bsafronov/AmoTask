import LogoIcon from "../../Icons/LogoIcon";
import LogoText from "../../Icons/LogoText";
import "./HeaderLogo.css";
const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <p className="header-logo__top">
        <LogoIcon />
        <LogoText />
      </p>
      <p className="header-logo__title">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default HeaderLogo;
