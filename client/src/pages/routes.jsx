import App from "../App";
import { AboutMe } from "./AboutMe/AboutMe";
import { Home } from "./Home/Home";

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
    ],
  },
];

export default routes;
