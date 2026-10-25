import App from "../App";
import { AboutMe } from "./AboutMe/AboutMe";
import { Contact } from "./Contact/Contact";
import { Datenschutzerklaerung } from "./Datenschutzerklaerung";
import { Home } from "./Home/Home";
import { Impressum } from "./Impressum";
import { Projects } from "./Projects/Projects";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/impressum",
        element: <Impressum />,
      },
      {
        path: "/datenschutzerklaerung",
        element: <Datenschutzerklaerung />,
      },
    ],
  },
];

export default routes;
