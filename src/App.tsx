import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:filterValue',
    element: <Product />
  },
  {
    path: '*',
    element: <NotFound />
  },
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
};

export default App;
