import DecoratorCircle from "./decorator-circle";

interface SectionCardProps {
  title: string;
  description: string;
}

const SectionCard = ({ title, description }: SectionCardProps) => {
  return (
    <div className="section-card bg-BG p-4 rounded-lg h-[240px] flex flex-col justify-between">
      <div className="flex gap-4 justify-between">
        <h3 className="card-title text-BLACK">{title}</h3>
        <DecoratorCircle size={12} color={"BLACK"} />
      </div>
      <p className="body-text text-BLACK">{description}</p>
    </div>
  );
};
export default SectionCard;
