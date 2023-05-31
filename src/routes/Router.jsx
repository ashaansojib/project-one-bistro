import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Menu from "../pages/allmenu/menu/Menu";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/ourmenu',
                element: <Menu></Menu>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])