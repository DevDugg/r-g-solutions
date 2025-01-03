import Container from "../structure/container";
import FooterContact from "../elements/footer-contact";
import FooterNav from "../elements/footer-nav";
import Link from "next/link";
import Logo from "../elements/logo";

const Footer = () => {
  return (
    <footer id="end">
      <Container className="flex flex-col gap-12 py-6 mt-[100px]">
        <Logo className="footer-logo text-ACCENT" />
        <FooterNav />
        <FooterContact />
        <div className="flex flex-wrap gap-x-9 gap-y-6 tag-text">
          <Link href={"/privacy-policy"} className="underline text-TEXT_GRAY">
            Privacy Policy
          </Link>
          <Link href={"/terms-of-service"} className="underline text-TEXT_GRAY">
            Terms Of Service
          </Link>
          <Link href={"/tax-number"} className="underline text-TEXT_GRAY">
            Tax Number
          </Link>
          <span className="text-TEXT_GRAY">
            Powered By:{" "}
            <a href="#" className="underline">
              Mizeru
            </a>{" "}
            <span className="text-TEXT_GRAY">©{new Date().getFullYear()}</span>
          </span>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
