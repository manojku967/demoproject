import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home.jsx";
import Services from "./Component/Services.jsx";
import About from "./Component/About.jsx";
import Product from "./Component/Product.jsx";
import Login from "./Component/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
    ],
  },
  {
    path:'/Login',
    element:<Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
);
