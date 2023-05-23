import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])