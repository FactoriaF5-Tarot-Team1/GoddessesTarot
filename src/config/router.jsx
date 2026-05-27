import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ReadingName from "../pages/reading-name/ReadingName";

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
        path: "reading-name",
        element: <ReadingName />,
      },
    ],
  },
]);
