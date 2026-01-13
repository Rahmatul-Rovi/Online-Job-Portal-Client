import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
         {
        index: true,
        Component: Home
    },
    {
      path: "/register",
      Component: Register
    },
    {
      path: "/login",
      Component: Login
    },
    {
      path: "/jobs/:id",
      Component: JobDetails,
      loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
    }
    ]
  },
]);

export default router;