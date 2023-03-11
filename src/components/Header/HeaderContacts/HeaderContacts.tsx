import LogoTelegram from "../../Icons/LogoTelegram";
import LogoViber from "../../Icons/LogoViber";
import LogoWhatsapp from "../../Icons/LogoWhatsapp";
import "./HeaderContacts.css";

const HeaderContacts = () => {
  const contactsLinks = [
    { logo: LogoTelegram, href: "mailto:social" },
    { logo: LogoViber, href: "mailto:social" },
    { logo: LogoWhatsapp, href: "mailto:social" },
  ];

  return (
    <div className="header-contacts">
      <a className="tel" href="tel:+7 555 555-55-55">
        +7 555 555-55-55
      </a>
      <ul className="header-contacts__social-list">
        {contactsLinks.map((Item, index) => (
          <li key={index} className="header-contacts__social-list_item">
            <a href={Item.href} className="icon_link">
              <Item.logo />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderContacts;
