import Button from "../elements/button";
import Container from "../structure/container";

const About = () => {
  return (
    <section id="about">
      <Container className="flex flex-col gap-10 mt-[100px]">
        <h2 className="section-title text-center">
          Your Gateway to <span className="text-ACCENT">Seamless International Trade</span> and Reliable Logistics
          Solutions
        </h2>
        <div className="flex items-start gap-6">
          <p className="flex flex-col gap-2 text-ACCENT w-min">
            <span className="decor-text-2">24/7</span>
            <span className="text-xs tracking-[-2%] font-semibold font-inter">Ready For Collaboration</span>
          </p>
          <div className="flex flex-col gap-4 body-text">
            <p>We specialize in simplifying global trade and helping businesses source and deliver goods with ease.</p>
            <p>Our mission is to provide reliable logistics and exceptional customer service every step of the way.</p>
          </div>
        </div>
        <Button label="Let's Work Together" className="bg-ACCENT_DARK py-4 w-full" />
      </Container>
    </section>
  );
};
export default About;
