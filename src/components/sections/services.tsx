import Button from "../elements/button";
import Container from "../structure/container";
import DecoratorCircle from "../elements/decorator-circle";
import SectionCard from "../elements/section-card";
import services from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="services">
      <Container className="bg-BLACK rounded-2xl p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <DecoratorCircle size={8} color={"WHITE"} />
            <span className="tag-text text-WHITE">{services.label}</span>
          </div>
          <h2 className="section-title text-WHITE">{services.title}</h2>
        </div>

        <div className="flex flex-col gap-4 mt-4 TABLET:grid TABLET:grid-cols-2 TABLET:gap-6 WIDE:flex WIDE:flex-row">
          {services.cards.map((card, index) => (
            <SectionCard key={card.title} title={card.title} description={card.description} index={index} />
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
