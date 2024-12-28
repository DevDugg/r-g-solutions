import { HeaderLink } from "./types";

interface Header {
  links: HeaderLink[];
}

const header: Header = {
  links: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Countries",
      href: "#countries",
    },
    {
      label: "Benefits",
      href: "#benefits",
    },
    {
      label: "Approach",
      href: "#approach",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
};

export default header;
