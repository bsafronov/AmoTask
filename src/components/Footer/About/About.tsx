const About = () => {
  const aboutItems = [
    { title: "Парнёрская программа", href: "#about" },
    { title: "Вакансии", href: "#about" },
  ];
  return (
    <div className="footer__item">
      <h5 className="footer__title">О компании</h5>
      <ul className="footer__item-list">
        {aboutItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
