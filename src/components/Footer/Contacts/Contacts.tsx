import LogoTelegram from "../../Icons/LogoTelegram";
import LogoViber from "../../Icons/LogoViber";
import LogoWhatsapp from "../../Icons/LogoWhatsapp";

const Contacts = () => {
  return (
    <div className="footer__item-social_inner">
      <div className="footer__item-social">
        <h5 className="footer__title">Контакты</h5>
        <ul className="footer__item-list-contacts">
          <li>
            <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
          </li>
          <li>
            <ul className="footer__social-list">
              <li>
                <a href="mailto:social" className="icon_link">
                  <LogoTelegram />
                </a>
              </li>
              <li>
                <a href="mailto:social" className="icon_link">
                  <LogoViber />
                </a>
              </li>
              <li>
                <a href="mailto:social" className="icon_link">
                  <LogoWhatsapp />
                </a>
              </li>
            </ul>
          </li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
      </div>
      <div className="rights">
        <p className="rights__text">©WELBEX 2022. Все права защищены.</p>
        <a className="rights__link" href="#confidential">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  );
};

export default Contacts;
