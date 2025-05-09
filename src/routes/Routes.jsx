import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Favourite from "../Favourite";

export const router = createBrowserRouter([
    //default route jokhon kew visit korbe eita show korbe
    {
        index: true,
        Component: MainLayout,
        errorElement: <p>There is no element in this route</p>
    },
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/favourite",
                Component: Favourite,
            }
        ]
    },
    {
        path: "/about",
        element: <p>This is about </p>
    }
]);