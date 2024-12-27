import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
