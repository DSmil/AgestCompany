/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix = "https://raw.githubusercontent.com/DSmil/AgestCompany/Master/images";

export default [
  {
    title: "Plotter Paper",
    description: "Is a special type of paper used with plotter machines. ",
    items: [
      {
        image: `${imagesPrefix}/plotter1.jpg`,
        name: "",
        route: `${imagesPrefix}/plotter1.jpg`,
      },
      {
        image: `${imagesPrefix}/Plotter_image2.png`,
        name: "",
        route: "/sections/page-sections/features",
      },
    ],
  },
  {
    title: "Paper for cutting",
    description: `This type of paper is used for the textile industry.\n Dimensions: \n100cm, \n160cm, \n180cm`,
    items: [
      {
        image: `${imagesPrefix}/cutting_paper2.jpg`,
        name: "",
        route: "/sections/navigation/navbars",
      },
      {
        image: `${imagesPrefix}/cutting_paper1.jpg`,
        name: "",
        route: "/sections/navigation/nav-tabs",
      },
    ],
  },
  {
    title: "Thermo premium plotter paper",
    description: `This type of paper is used on wide format plotting machine to apply plotter drawn patterns on to fabric.`,
    items: [
      {
        image: `${imagesPrefix}/thermo_plotter2.jpg`,
        name: "",
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: `${imagesPrefix}/thermo_plotter1.png`,
        name: "",
        route: "/sections/navigation/nav-tabs",
      },
    ],
  },
  {
    title: "Recycled toilet paper",
    description: `Recycled toilet paper is made from 100% post-consumer waste, it is used in the textile industry.  Dimension: 100cm.`,
    items: [
      {
        image: `${imagesPrefix}/recycled_paper1.jpg`,
        name: " ",
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${imagesPrefix}/recycled_paper2.jpg`,
        name: "",
        route: "/sections/attention-catchers/alerts",
      },
    ],
  },
  {
    title: "Packing paper",
    description: `Packing paper, otherwise known as kitchen packing paper is ideal to wrap around kitchen items or other stuff`,
    items: [
      {
        image: `${imagesPrefix}/packing_paper1.jpg`,
        name: "",
        route: "/sections/elements/buttons",
      },
      {
        image: `${imagesPrefix}/packing_paper2.jpg`,
        name: "",
        route: "/sections/elements/avatars",
      },
    ],
  },
];
