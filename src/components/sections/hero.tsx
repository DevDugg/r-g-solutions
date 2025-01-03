import Button from "../elements/button";
import Container from "../structure/container";
import Image from "next/image";
import hero from "@/data/hero";

const Hero = () => {
  return (
    <div className="hero h-dvh relative" id="#hero">
      <Image
        src={hero.background}
        alt={hero.title}
        width={1440}
        height={800}
        className="absolute left-0 top-0 size-full object-cover object-center pointer-events-none select-none -z-10"
        priority
        loading="eager"
      />
      <div className="gradient size-full absolute top-0 left-0 bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)] pointer-events-none select-none -z-10"></div>
      <Container
        className="flex flex-col justify-between gap-6 pt-[28.43dvh] text-WHITE h-full WIDE:justify-normal WIDE:items-center"
        parentClassName="h-full"
      >
        <div className="flex flex-col gap-6 text-left WIDE:text-center WIDE:items-center">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="body-text TABLET:hero-subtitle WIDE:max-w-[70%] DESKTOP:max-w-[50%] DESKTOP:body-text">
            {hero.description}
          </p>
        </div>
        <Button label={hero.cta.label} animateHover className="w-full mb-[42px] WIDE:w-[200px]" href={hero.cta.href} />
      </Container>
    </div>
  );
};
export default Hero;
