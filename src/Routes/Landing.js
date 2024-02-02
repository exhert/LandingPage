
import Home from "../Pages/landing/Home";
import { lazy } from "react";
const About = lazy(() => import("../Pages/landing/About"));
const Contact = lazy(() => import("../Pages/landing/Contact"));

const LANDING_PAGE_ROUTES = {
  Home: {
    path: "/",
    component: Home,
    exact: true,
  },
 
  About:{
    path: "/about",
    component: About
  },
  Contact:{
    path: "/contact",
    component: Contact
  }
};

export default LANDING_PAGE_ROUTES;
