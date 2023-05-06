import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setSearch(keyword || "");
  }, [keyword]);

  const handleSearch = () => {
    navigate(`/products/${search}`);
  };
  console.log(12123);
  return (
    <div>
      <input type="text" value={search} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
