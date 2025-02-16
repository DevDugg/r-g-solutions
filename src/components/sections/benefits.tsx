import BenefitsCard from "../elements/benefits-card";
import Button from "../elements/button";
import Container from "../structure/container";
import DecoratorCircle from "../elements/decorator-circle";
import benefits from "@/data/benefits";

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <Container className="flex flex-col gap-12 bg-BLACK rounded-2xl p-4 TABLET:p-6 WIDE:grid WIDE:grid-cols-[minmax(200px, 400px)_minmax(243px,759px)] WIDE:gap-x-[113px] WIDE:gap-y-6 DESKTOP:grid-cols-[400px_minmax(243px,759px)]">
        <div className="flex flex-col gap-4 text-WHITE">
          <div className="flex gap-2 items-center">
            <DecoratorCircle size={8} color={"WHITE"} /> <span className="tag-text">{benefits.label}</span>
          </div>
          <h2 className="section-title">{benefits.title}</h2>
        </div>
        <div className="flex flex-col gap-4 WIDE:flex-row WIDE:gap-4">
          {benefits.cards.map((card, i) => (
            <BenefitsCard {...card} index={i} key={card.title} />
          ))}
          <Button className="w-full WIDE:hidden" label={benefits.cta.label} href={benefits.cta.href} />
        </div>
        <Button className="w-full hidden WIDE:flex col-span-2" label={benefits.cta.label} href={benefits.cta.href} />
      </Container>
    </section>
  );
};
export default Benefits;
