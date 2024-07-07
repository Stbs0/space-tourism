import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HeaderLayout from "../layouts/HeaderLayout";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/Destination",
        element: <Destination />,
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
]);
export default router;
