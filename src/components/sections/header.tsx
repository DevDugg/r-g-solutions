import Burger from "../elements/burger";
import Button from "../elements/button";
import Container from "../structure/container";
import Logo from "../elements/logo";
import Nav from "./nav";
import header from "@/data/header";

const Header = () => {
  return (
    <header className="header absolute top-0 left-0 z-10 w-full">
      <Container className="flex justify-between items-center mt-6">
        <Logo />
        <Burger />
        <Nav />
        <Button label={header.buttonLabel} animateHover className="hidden TABLET:block" />
      </Container>
    </header>
  );
};

export default Header;
