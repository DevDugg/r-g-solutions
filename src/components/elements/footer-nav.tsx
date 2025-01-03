"use client";

import { Variants, motion } from "motion/react";

import FooterLink from "./footer-link";
import footer from "@/data/footer";
import { useState } from "react";

const variants: Variants = {
  active: {
    opacity: 1,
  },
  nonActive: {
    opacity: 0.3,
  },
};

const FooterNav = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <nav className="flex flex-col gap-6">
      <h3 className="navigation-title">{footer.nav.title}</h3>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-2 justify-between">
        {footer.nav.links.map((link, i) => (
          <motion.div
            className="w-fit"
            key={link.href}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            variants={variants}
            initial={"active"}
            animate={active === null ? "active" : active !== i ? "nonActive" : "active"}
          >
            <FooterLink {...link} />
          </motion.div>
        ))}
      </div>
    </nav>
  );
};
export default FooterNav;
