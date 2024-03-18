import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Layouts/Home/Home";
import Homepage from "../Pages/Homepage/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
        ]
        
        }
  ]);

export default router;