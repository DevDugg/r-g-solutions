import Burger from "../elements/burger";
import Container from "../structure/container";
import Logo from "../elements/logo";

const Header = () => {
  return (
    <header className="header absolute top-0 left-0 z-10 w-full">
      <Container className="flex justify-between items-center mt-6">
        <Logo />
        <Burger />
      </Container>
    </header>
  );
};

export default Header;
