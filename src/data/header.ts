import { HeaderLink } from "./types";

interface Header {
  links: HeaderLink[];
  buttonLabel: string;
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
  buttonLabel: "Contact Us",
};

export default header;
