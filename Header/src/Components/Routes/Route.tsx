import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Data, StateManagement, Todo } from "../pages";

const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Data />,
      },
      {
        path: "/state-management",
        element: <StateManagement />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

export default AllRoute;
