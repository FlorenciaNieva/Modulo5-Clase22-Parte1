import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/Detail";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Header />,
//     errorElement: <NotFound />,
//     childrens [
//        {
//           path: "/",
//           element: <Home />,
//        },
//        {
//           path: "/detail/:id",
//           element: <Detail />,
//        },
//     ]
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   }
// ]);

export default router;
