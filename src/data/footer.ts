import header from "./header";

const footer = {
  nav: {
    title: "Navigation",
    links: [
      {
        label: "Home",
        href: "#home",
      },

      ...header.links,
    ],
  },
  contact: {
    title: "Contact details",
    links: [
      {
        href: "https://wa.me/+32489150785",
        label: "WhatsApp: +32489150785",
      },
      {
        href: "mailto:info@rgtrading.com",
        label: "info@rgtrading.com",
      },
      //   {
      //         href: "https://wa.me/+32489150785",
      //       label: "@rgtrading",
      //   },
    ],
  },
};

export default footer;
