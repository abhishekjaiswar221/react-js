import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import Products from "./Products/Products";
import Featured from "./Products/Featured";
import NewProducts from "./Products/NewProducts";
import User from "./Users/User";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import PlaceOrder from "./Components/PlaceOrder";

const DemoRoute = () => {
  let route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/products",
      element: <Products />,
      children: [
        { index: true, element: <Featured /> },
        { path: "featured", element: <Featured /> },
        { path: "new-products", element: <NewProducts /> },
      ],
    },
    {
      path: "/users",
      element: <User />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "order",
      element: <PlaceOrder />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return route;
};

export default DemoRoute;
