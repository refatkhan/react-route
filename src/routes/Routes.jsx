import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Favourite from "../Favourite";

export const router = createBrowserRouter([
    //default route jokhon kew visit korbe eita show korbe
    {

    },
  {
    path: "/",
    Component: MainLayout,
    children:[
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