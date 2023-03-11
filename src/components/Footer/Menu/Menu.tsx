const Menu = () => {
  const menuItems1 = [
    { title: "Расчёт стоимости", href: "#menu" },
    { title: "Услуги", href: "#menu" },
    { title: "Виджеты", href: "#menu" },
    { title: "Интеграции", href: "#menu" },
    { title: "Наши клиенты", href: "#menu" },
  ];

  const menuItems2 = [
    { title: "Кейсы", href: "#menu" },
    { title: "Благодарственные письма", href: "#menu" },
    { title: "Сертификаты", href: "#menu" },
    { title: "Блог на Youtube", href: "#menu" },
    { title: "Вопрос / Ответ", href: "#menu" },
  ];

  return (
    <div className="footer__item">
      <h5 className="footer__title">Меню</h5>
      <div className="footer__item-lists">
        <ul className="footer__item-list">
          {menuItems1.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
        <ul className="footer__item-list">
          {menuItems2.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
