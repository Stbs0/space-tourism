import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HeaderLayout from "../layouts/HeaderLayout";
import Destination from "../pages/Destination";
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Destination",
        element: <Destination />,
      },
    ],
  },
]);
export default router;
