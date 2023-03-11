import "./Navbar.css";

const Navbar = () => {
  const navbarItems = [
    "Услуги",
    "Виджеты",
    "Интеграции",
    "Кейсы",
    "Сертификаты",
  ];

  const navbarMobileItems = ["Услуги", "Виджеты", "Интеграции", "Кейсы"];

  return (
    <nav className="nav">
      <ul className="navbar">
        {navbarItems.map((item, index) => (
          <li className="navbar__item" key={index}>
            <a href="#page" className="navbar__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul className="navbar-mobile">
        {navbarMobileItems.map((item, index) => (
          <li className="navbar__item" key={index}>
            <a href="#page" className="navbar__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
