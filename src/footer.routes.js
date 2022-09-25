// Material Kit 2 React components
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();
const imagesPrefix = "https://raw.githubusercontent.com/DSmil/Agest/main/Images";
export default {
  brand: {
    name: "Agest Company",
    image: `${imagesPrefix}/logo.png`,
    route: "/",
  },
  socials: [
    {
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      link: "https://twitter.com/creativetim",
    },
    {
      link: "https://github.com/creativetimofficial",
    },
    {
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "",
      items: [
        { name: "", href: "https://www.creative-tim.com/presentation" },
        { name: "", href: "https://www.creative-tim.com/templates/free" },
      ],
    },
    {
      name: "company",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/templates/free" },
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "", href: "https://services.creative-tim.com/" },
        { name: "", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "",
      items: [
        { name: "", href: "https://www.creative-tim.com/terms" },
        { name: "", href: "https://www.creative-tim.com/privacy" },
        { name: "", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Agest Company
    </MKTypography>
  ),
};
