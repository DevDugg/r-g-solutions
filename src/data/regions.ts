import colors from "@/config/colors";

const regions = {
  label: "Delivering to your doorstep",
  title: `explore <span style="color:${colors.ACCENT}">the regions</span> we serve, delivering your products with care and efficiency`,
  cards: [
    {
      label: "Europe",

      image: "/eu-map.svg",
    },
    {
      label: "China",
      image: "/china-map.svg",
    },
    {
      label: "UAE",
      image: "/uae-map.svg",
    },
    {
      label: "Turkmenistan",
      image: "/turkmenistan-map.svg",
    },
  ],
  cta: {
    label: "Let's Work Together",
    href: "#contact",
  },
};

export default regions;
