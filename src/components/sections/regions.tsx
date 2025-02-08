import Button from "../elements/button";
import Container from "../structure/container";
import RegionCard from "../elements/region-card";
import regions from "@/data/regions";

const Regions = () => {
  return (
    <section id="regions" className="regions">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="tag-text text-BLACK text-center block">{regions.label}</span>
          <h2 className="section-title text-BLACK text-center" dangerouslySetInnerHTML={{ __html: regions.title }}></h2>
        </div>
        <div className="flex flex-col gap-4 WIDE:grid WIDE:grid-cols-2">
          {regions.cards.map((card) => (
            <RegionCard key={card.label} {...card} />
          ))}
          <Button {...regions.cta} className="w-full bg-ACCENT_DARK TABLET:col-span-2" />
        </div>
      </Container>
    </section>
  );
};
export default Regions;
