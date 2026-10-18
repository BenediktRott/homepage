import App from "../App";
import { AboutMe } from "./AboutMe/AboutMe";
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
    ],
  },
];

export default routes;
