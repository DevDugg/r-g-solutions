import DecoratorCircle from "./decorator-circle";
import { cn } from "@/lib/utils";
import services from "@/data/services";

interface SectionCardProps {
  title: string;
  description: string;
  index: number;
}

const SectionCard = ({ title, description, index }: SectionCardProps) => {
  return (
    <div
      className={cn("section-card bg-BG p-4 rounded-lg h-[240px] flex flex-col justify-between TABLET:h-[260px]", {
        "TABLET:col-span-2": index + 1 === services.cards.length,
      })}
    >
      <div className="flex gap-4 justify-between">
        <h3 className="card-title text-BLACK">{title}</h3>
        <DecoratorCircle size={12} color={"BLACK"} />
      </div>
      <p className="body-text text-BLACK">{description}</p>
    </div>
  );
};
export default SectionCard;
