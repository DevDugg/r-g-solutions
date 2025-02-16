import BenefitsCard from "../elements/benefits-card";
import Button from "../elements/button";
import Container from "../structure/container";
import DecoratorCircle from "../elements/decorator-circle";
import benefits from "@/data/benefits";

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <Container className="flex flex-col gap-12 bg-BLACK rounded-2xl p-4">
        <div className="flex flex-col gap-4 text-WHITE">
          <div className="flex gap-2 items-center">
            <DecoratorCircle size={8} color={"WHITE"} /> <span className="tag-text">{benefits.label}</span>
          </div>
          <h2 className="section-title">{benefits.title}</h2>
        </div>
        <div className="flex flex-col gap-4">
          {benefits.cards.map((card, i) => (
            <BenefitsCard {...card} index={i} key={card.title} />
          ))}
          <Button className="w-full" label={benefits.cta.label} href={benefits.cta.href} />
        </div>
      </Container>
    </section>
  );
};
export default Benefits;
