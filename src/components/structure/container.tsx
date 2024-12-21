import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={"container max-w-[1440px] mx-auto px-4 TABLET:px-10 DESKTOP:px-[60px]"}>
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
