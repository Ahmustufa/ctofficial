import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ContactsIcon from "@mui/icons-material/Contacts";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Home from "../pages/Home";
import Aboutus from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

export const data = [
  {
    title: "Home",
    path: "/",
    icons: <HomeIcon />,
    // component: <Home />,
  },

  {
    title: "About us",
    path: "/aboutus",
    icons: <ArticleIcon />,
    // component: <Aboutus />,
  },

  {
    title: "Contact",
    path: "/contact",
    icons: <ContactsIcon />,
    // component: <Contact />,
  },
  {
    title: "Services",
    path: "/services",
    icons: <DesignServicesIcon />,
    // component: <Services />,
  },
];
