import Image from "next/image";

interface CountryCardProps {
  label: string;
  image: string;
}

const CountryCard = ({ label, image }: CountryCardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-end bg-BLACK rounded-2xl p-6 relative h-[320px] overflow-hidden">
      <Image
        src={image}
        alt={label}
        width={1200}
        height={1200}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] object-contain"
      />

      <h3 className="card-title text-WHITE">{label}</h3>
    </div>
  );
};

export default CountryCard;
