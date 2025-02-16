import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Regions from "@/components/sections/regions";
import Services from "@/components/sections/services";
export default function Home() {
  return (
    <main className="main flex flex-col gap-[100px] TABLET:gap-40 WIDE:gap-[150px]">
      <Hero />
      <About />
      <Services />
      <Regions />
    </main>
  );
}
