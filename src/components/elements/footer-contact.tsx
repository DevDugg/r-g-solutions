import FooterLink from "./footer-link";
import footer from "@/data/footer";

const FooterContact = () => {
  return (
    <nav className="flex flex-col gap-6">
      <h3 className="navigation-title">{footer.contact.title}</h3>
      <div className="flex flex-col gap-2">
        {footer.contact.links.map((link) => (
          <FooterLink {...link} key={link.href} />
        ))}
      </div>
    </nav>
  );
};
export default FooterContact;
