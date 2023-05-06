import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";

function ShopDetail() {
  const { keyword } = useParams();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://api.example.com/shop?keyword=${keyword}`
  //     );
  //     setProducts(response.data);
  //   };
  //   fetchData();
  // }, [keyword]);

  return (
    <div>
      <h2>Shop Detail</h2>
      <p>You searched for: {keyword}</p>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ShopDetail;
