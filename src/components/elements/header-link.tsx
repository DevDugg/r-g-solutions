"use client";

import { type HeaderLink as HeaderLinkType } from "@/data/types";
import { motion, Variants } from "framer-motion";

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

const HeaderLink = ({ href, label }: HeaderLinkType) => {
  return (
    <motion.div className="relative" initial="initial" whileHover={"scaleX"}>
      <a href={href} className="menu-item text-WHITE">
        {label}
      </a>
      <motion.div className="absolute w-full h-0.5 bg-WHITE -bottom-1 left-0" variants={variants} />
    </motion.div>
  );
};
export default HeaderLink;
