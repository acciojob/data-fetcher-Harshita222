import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [product, setProduct] = useState([]);

  const productApi = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const res = await response.json();
    setProduct(res.products);
    console.log(res);
  };

  useEffect(() => {
    productApi();
  }, []);

  return (
    <div>
      <h1>Data Fetched from Api</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    
    </div>
  );
};

export default App;
