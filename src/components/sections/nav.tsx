import HeaderLink from "../elements/header-link";
import header from "@/data/header";

const Nav = () => {
  return (
    <nav className="hidden items-center gap-6 TABLET:flex">
      {header.links.map((link) => (
        <HeaderLink key={link.href} {...link} />
      ))}
    </nav>
  );
};
export default Nav;
