import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import NotFound from "@/pages/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
