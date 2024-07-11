import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HeaderLayout from "../layouts/HeaderLayout";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { element } from "prop-types";
import PageTransition from "../components/PageTransition";
const router = createBrowserRouter([
  {
    element: <BackgroundWrapper />,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          {
            path: "/",
            element: <PageTransition />,
            children: [{ index: true, element: <Home /> }],
          },
          {
            path: "/Destination",
            element: <PageTransition />,
            children: [
              {
                index: true,
                element: <Destination />,
                loader: async () => {
                  return fetch("http://localhost:4000/destinations");
                },
              },
            ],
          },
          {
            path: "/Crew",
            element: <PageTransition />,
            children: [{ index: true, element: <Crew /> }],
          },
          {
            path: "/Technology",
            element: <PageTransition />,
            children: [{ index: true, element: <Technology /> }],
          },
        ],
      },
    ],
  },
]);
export default router;
