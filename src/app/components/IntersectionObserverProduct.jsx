import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { getProducts } from "./ProductList";
import Spinner from "./Spinner";

const IntersectionObserverProduct = ({ initialProducts }) => {
  const [productArray, setProductsArray] = useState(initialProducts);
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    const fetchMoreProducts = async () => {
      const product = await getProducts();
      const newProductArray = productArray.concat(product);
      console.log(product);
      setProductsArray(newProductArray);
    };
    fetchMoreProducts();
  }, [inView]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center gap- mb-5">
        {productArray?.map((product, i) => {
          return <ProductCard key={i} data={product} />;
        })}
      </div>
      <div ref={ref} className="m-auto w-max">
        <Spinner />
      </div>
    </div>
  );
};

export default IntersectionObserverProduct;
