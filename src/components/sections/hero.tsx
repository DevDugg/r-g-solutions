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
      <div className="gradient size-full absolute top-0 left-0 bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)]"></div>
      <Container className="flex flex-col justify-between"></Container>
    </div>
  );
};
export default Hero;
