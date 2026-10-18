import App from "../App";
import { AboutMe } from "./AboutMe/AboutMe";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
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
    ],
  },
];

export default routes;
