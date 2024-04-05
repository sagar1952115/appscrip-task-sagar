"use client";
import React, { Suspense } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <Suspense fallback={<>Loading</>}>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {products.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>
    </Suspense>
  );
};

export default ProductList;
