"use client";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-7">
      {products.map((product) => {
        return <ProductCard key={product.id} data={product} />;
      })}
    </div>
  );
};

export default ProductList;
