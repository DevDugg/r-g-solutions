import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Regions from "@/components/sections/regions";
import Services from "@/components/sections/services";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Regions />
    </main>
  );
}
