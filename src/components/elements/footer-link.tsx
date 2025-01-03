"use client";

import { defaultTransition } from "@/config/motion";
import { type HeaderLink as HeaderLinkType } from "@/data/types";
import { motion, Variants } from "motion/react";

const variants: Variants = {
  initial: {
    scaleX: 0,
    transformOrigin: "right",
  },
  scaleX: {
    scaleX: 1,
    transformOrigin: "left",
  },
};

const FooterLink = ({ href, label }: HeaderLinkType) => {
  return (
    <motion.div className="relative w-fit" initial="initial" whileHover={"scaleX"}>
      <a href={href} className="body-text text-BLACK">
        {label}
      </a>
      <motion.div
        className="absolute w-full h-0.5 bg-BLACK -bottom-1 left-0"
        variants={variants}
        transition={defaultTransition}
      />
    </motion.div>
  );
};
export default FooterLink;
