import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HeaderLayout from "../layouts/HeaderLayout";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { element } from "prop-types";
const router = createBrowserRouter([
  {
    element: <BackgroundWrapper />,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          { index: true, path: "/", element: <Home /> },
          {
            path: "/Destination",
            element: <Destination />,
            loader: async () => {
              return fetch("http://localhost:4000/destinations");
            },
          },
          {
            path: "/Crew",
            element: <Crew />,
          },
          {
            path: "/Technology",
            element: <Technology />,
          },
        ],
      },
    ],
  },
]);
export default router;
