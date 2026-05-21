import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
