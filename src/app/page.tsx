import About from "@/components/sections/about";
import Countries from "@/components/sections/countries";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Countries />
    </main>
  );
}
