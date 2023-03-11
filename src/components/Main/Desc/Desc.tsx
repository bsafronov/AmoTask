import "./Desc.css";

const Desc = () => {
  const descOptions = [
    { title: "Виджеты", desc: "30 готовых решений" },
    { title: "Dashboard", desc: "с показателями вашего бизнеса" },
    { title: "Skype Аудит", desc: "отдела продаж и CRM системы" },
    { title: "35 дней", desc: "использования CRM" },
  ];

  const descOptionsMobile = [
    "Skype аудит",
    "30 виджетов",
    "Dashboard",
    "Месяц аmoCRM",
  ];

  return (
    <div className="desc">
      <h3 className="desc__title">
        <span>Вместе с </span>
        <span className="desc__title_gradient-higher">БЕСПЛАТНОЙ</span>
        <span className="desc__title_gradient"> КОНСУЛЬТАЦИЕЙ </span>
        <span>мы дарим:</span>
      </h3>
      <ul className="desc__list">
        {descOptions.map((item, index) => (
          <li key={index} className="desc__item">
            <h5 className="desc__item_title">{item.title}</h5>
            <p className="desc__item_desc">{item.desc}</p>
          </li>
        ))}
      </ul>
      <ul className="desc__list-mobile">
        {descOptionsMobile.map((item, index) => (
          <li key={index} className="desc__item">
            <h5 className="desc__item_title">{item}</h5>
          </li>
        ))}
      </ul>
      <button className="desc__btn">Получить консультацию</button>
    </div>
  );
};

export default Desc;
