import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return <div className={cn("logo text-WHITE w-[224px]", className)}>R&G Trading solutions</div>;
};
export default Logo;
