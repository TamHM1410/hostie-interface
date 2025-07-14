import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Service from "../pages/Serivce";

export const publicRoutes = [
  {
    path: "/",
    component: <Home />,
    index: true,
  },
  {
    path: "/contact",
    component: <Contact />,
    index: false,
  },
  {
    path: "/service",
    component: <Service />,
    index: false,
  },
];
