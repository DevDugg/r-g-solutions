import { cn } from "@/lib/utils";
import colors from "@/config/colors";

interface DecoratorCircleProps {
  size: number;
  color: keyof typeof colors;
}

const DecoratorCircle = ({ size, color }: DecoratorCircleProps) => {
  return <div style={{ width: `${size}px`, height: `${size}px` }} className={cn(`bg-${color}`, `rounded-full`)}></div>;
};

export default DecoratorCircle;
