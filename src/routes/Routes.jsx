import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
    //default route jokhon kew visit korbe eita show korbe
    {
        index: true,
        Component: MainLayout,
        errorElement: <ErrorPage />
    },
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/favorite",
                Component: <Favorites />
            }
        ]
    },
    {
        path: "/about",
        Component: About
    }, {
        path: "/phone-details",
        Component: <PhoneDetails />
    }
]);