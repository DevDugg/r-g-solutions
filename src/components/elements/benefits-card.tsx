import { formatToDoubleDigits } from "@/lib/utils";

interface BenefitsCardProps {
  title: string;
  description: string;
  background: string;
  index: number;
}

const BenefitsCard = ({ title, description, background, index }: BenefitsCardProps) => {
  return (
    <div
      className="flex flex-col gap-6 p-4 rounded-lg text-BLACK overflow-hidden TABLET:flex-row TABLET:justify-between TABLET:gap-12 WIDE:flex-col WIDE:gap-28"
      style={{ background }}
    >
      <div className="flex flex-col gap-4 TABLET:justify-between">
        <h3 className="card-title WIDE:max-w-[75%]">{title}</h3>
        <h4 className="body-text TABLET:max-w-56">{description}</h4>
      </div>
      <span className="decor-text-1 WIDE:-ml-16 DESKTOP:-ml-24">{formatToDoubleDigits(index + 1)}</span>
    </div>
  );
};
export default BenefitsCard;
