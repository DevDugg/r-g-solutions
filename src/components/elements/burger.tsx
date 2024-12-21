import Image from "next/image";

const Burger = () => {
  return (
    <button type="button" className="burger TABLET:hidden">
      <Image src={"/list.svg"} width={24} height={24} alt="list icon" className="size-6 aspect-square TABLET:size-10" />
    </button>
  );
};
export default Burger;
