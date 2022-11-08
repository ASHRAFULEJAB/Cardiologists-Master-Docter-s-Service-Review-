import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }, {
                path: "/services",
                element:<Services></Services>
            }, {
                path: '/blog',
                element:<Blog></Blog>
            }, {
                path: '/login',
                element:<Login></Login>
            }, {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
])