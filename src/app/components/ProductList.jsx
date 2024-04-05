// "use server";
// import React, { Suspense, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Products from "./Products";

const getProducts = async () => {
  const res = fetch("https://fakestoreapi.com/products");
  return (await res).json();
};

const ProductList = async ({ products }) => {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     // const product = response.json();
  //     console.log(response.data);
  //     setProduct(response.data);
  //   };
  //   fetchProduct();
  // }, []);
  const product = await getProducts();

  return (
    // <Suspense fallback={<>Loading</>}>
    <>
      <Products products={product} />
    </>
    // </Suspense>
  );
};

export default ProductList;
