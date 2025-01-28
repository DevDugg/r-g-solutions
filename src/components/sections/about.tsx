import Button from "../elements/button";
import Container from "../structure/container";

const About = () => {
  return (
    <section id="about">
      <Container
        className="flex flex-col gap-10 mt-[100px] items-center WIDE:max-w-[816px] DESKTOP:max-w-[1096px]"
        parentClassName="flex justify-center"
      >
        <h2 className="section-title-big text-center">
          Your Gateway to <span className="text-ACCENT">Seamless International Trade</span> and Reliable Logistics
          Solutions
        </h2>
        <div className="flex items-start gap-6">
          <p className="flex flex-col gap-2 text-ACCENT TABLET:items-end TABLET:w-full">
            <span className="decor-text-2">24/7</span>
            <span className="text-xs tracking-[-2%] font-semibold font-inter">Ready For Collaboration</span>
          </p>
          <div className="flex flex-col gap-4 body-text max-w-[230px] TABLET:max-w-[348px]">
            <p>We specialize in simplifying global trade and helping businesses source and deliver goods with ease.</p>
            <p>Our mission is to provide reliable logistics and exceptional customer service every step of the way.</p>
            <Button label="Let's Work Together" className="hidden bg-ACCENT_DARK py-4 mt-5 w-full TABLET:block" />
          </div>
        </div>
        <Button label="Let's Work Together" className="bg-ACCENT_DARK py-4 w-full TABLET:hidden" />
      </Container>
    </section>
  );
};
export default About;
