import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ReadingName from "../pages/reading-name/ReadingName";
import History from "../pages/history/History";

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
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);
