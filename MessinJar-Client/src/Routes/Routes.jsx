import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Layouts/Home/Home";
import Homepage from "../Pages/Homepage/Homepage";
import Chatpage from "../Pages/ChatPage/Chatpage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

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
          {
            path: "/chat",
            element: <Chatpage />
          }
        ]
        
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/signup", 
          element: <SignUpPage></SignUpPage>
        }
  ]);

export default router;