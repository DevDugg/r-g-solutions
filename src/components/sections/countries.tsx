import Container from "../structure/container";
import CountryCard from "../elements/country-card";
import countries from "@/data/countries";

const Countries = () => {
  return (
    <section id="countries" className="countries">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="tag-text text-BLACK text-center block">{countries.label}</span>
          <h2
            className="section-title text-BLACK text-center"
            dangerouslySetInnerHTML={{ __html: countries.title }}
          ></h2>
        </div>
        <div className="flex flex-col gap-4">
          {countries.cards.map((card) => (
            <CountryCard key={card.label} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Countries;
