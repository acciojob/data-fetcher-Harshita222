import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <h1>Data Fetched from API</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    
    </div>
  );
};

export default App;
