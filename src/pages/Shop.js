import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { keyword } = useParams();
  console.log(keyword, "shop");

  return (
    <div>
      <h1>123123</h1>
    </div>
  );
}

export default Shop;
