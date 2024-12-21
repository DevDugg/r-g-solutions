import { MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import { defaultTransition } from "@/config/motion";

const Provider = ({ children }: PropsWithChildren) => {
  return <MotionConfig transition={defaultTransition}>{children}</MotionConfig>;
};

export default Provider;
