import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import SearchHeader from "./components/SearchHeader";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Shop />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/products/:keyword" element={<Shop />} />
      <Route path="/products/detail/:productId" element={<ShopDetail />} />
    </Routes>
  );
}

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      {location.pathname !== "/login" && <SearchHeader />}
      <AppRoutes />
    </>
  );
}

export default App;
