import Image from "next/image";

interface RegionCardProps {
  label: string;
  image: string;
}

const RegionCard = ({ label, image }: RegionCardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-end bg-BLACK rounded-2xl p-6 relative h-[320px] overflow-hidden">
      <Image
        src={image}
        alt={label}
        width={1200}
        height={1200}
        className="absolute bottom-10 right-6 size-[300px] object-contain TABLET:-bottom-20 TABLET:-right-5 TABLET:size-[450px]"
      />

      <h3 className="card-title text-WHITE z-10">{label}</h3>
    </div>
  );
};

export default RegionCard;
