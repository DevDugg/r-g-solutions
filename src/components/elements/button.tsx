"use client";

import { cn } from "@/lib/utils";
import colors from "@/config/colors";
import { motion } from "motion/react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  className?: string;
  onClick?: () => void;
  animateHover?: boolean;
}

const variants = {
  initial: {
    backgroundColor: colors.ACCENT,
  },
  hover: {
    backgroundColor: colors.ACCENT_DARK,
  },
};

const Button = ({ label, type, className, onClick, animateHover }: ButtonProps) => {
  return (
    <motion.button
      type={type}
      className={cn("button rounded-lg px-6 py-3 text-WHITE bg-ACCENT w-fit", className)}
      onClick={onClick}
      variants={animateHover ? variants : undefined}
      initial="initial"
      whileHover="hover"
    >
      {label}
    </motion.button>
  );
};
export default Button;
