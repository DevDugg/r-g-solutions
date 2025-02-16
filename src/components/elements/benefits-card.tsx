import { formatToDoubleDigits } from "@/lib/utils";

interface BenefitsCardProps {
  title: string;
  description: string;
  background: string;
  index: number;
}

const BenefitsCard = ({ title, description, background, index }: BenefitsCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg text-BLACK" style={{ background }}>
      <div className="flex flex-col gap-4">
        <h3 className="card-title">{title}</h3>
        <h4 className="body-text">{description}</h4>
      </div>
      <span className="decor-text-1">{formatToDoubleDigits(index + 1)}</span>
    </div>
  );
};
export default BenefitsCard;
