import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import SearchHeader from "./components/SearchHeader";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/products/:keyword" element={<Shop />} />
      <Route path="/products/detail/:productId" element={<ShopDetail />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <SearchHeader />
      <AppRoutes />
    </>
  );
}

export default App;
