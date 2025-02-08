import Button from "../elements/button";
import Container from "../structure/container";
import DecoratorCircle from "../elements/decorator-circle";
import SectionCard from "../elements/section-card";
import services from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="my-20">
      <Container className="bg-BLACK rounded-2xl p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <DecoratorCircle size={8} color={"WHITE"} />
            <span className="tag-text text-WHITE">{services.label}</span>
          </div>
          <h2 className="section-title text-WHITE">{services.title}</h2>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {services.cards.map((card) => (
            <SectionCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button label={services.cta.label} href={services.cta.href} className="w-full" />
        </div>
      </Container>
    </section>
  );
};
export default Services;
