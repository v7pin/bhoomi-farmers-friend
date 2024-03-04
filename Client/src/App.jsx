import React from "react";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhatIsBhoomi from "./components/WhatIsBhoomi.jsx";
import ContactUs from "./components/ContactUs.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Article from "./components/Article.jsx";
import ShopApp from "./components/ShopApp.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/what-is-bhoomi",
    element: <WhatIsBhoomi></WhatIsBhoomi>,
  },
  {
    path: "/contact-us",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/about-us",
    element: <AboutUs></AboutUs>,
  },
  {
    path:"/articles",
    element:<Article></Article>
  },
  {
    path:"/bhoomikart",
    element:<ShopApp></ShopApp>
  }
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
