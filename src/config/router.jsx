import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Reading from "../pages/reading/Reading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
       {
        path: "reading",
        element: <Reading />,
      },
    ],
  },
]);
