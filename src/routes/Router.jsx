import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import OnlineRequest from "../pages/OnlineRequest/OnlineRequest";
import ServicesSection from "../pages/ServicesSection/ServicesSection";
import AboutSection from "../pages/AboutSection/AboutSection";
import ContactSection from "../pages/ContactSection/ContactSection";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('../services.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/online",
                element: <PrivateRoute><OnlineRequest></OnlineRequest></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><ContactSection></ContactSection></PrivateRoute>
            },
            {
                path: "/about",
                element: <PrivateRoute><AboutSection></AboutSection></PrivateRoute>
            },
            {
                path: "/services",
                element: <PrivateRoute><ServicesSection></ServicesSection></PrivateRoute>
            }
   
        ]
    }
]);

export default Router;