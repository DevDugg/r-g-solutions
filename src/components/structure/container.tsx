import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface IProps extends PropsWithChildren {
  parentClassName?: string;
  className?: string;
}

const Container = ({ children, className, parentClassName }: IProps) => {
  return (
    <div className={cn("container max-w-[1440px] mx-auto px-4 TABLET:px-10 DESKTOP:px-[60px]", parentClassName)}>
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
