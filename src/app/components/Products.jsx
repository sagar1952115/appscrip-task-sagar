"use client";
import React, { useEffect, useState } from "react";
import ProductList, { getProducts } from "./ProductList";
import FilterBar from "./FilterBar";
import SortBy from "./SortBy";
import Image from "next/image";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const [productsArray, setProductsArray] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [toggleRecommendedDropdown, setToggleRecommendedDropdown] =
    useState(false);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  const handleShowMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };
  const handleRecommendedDropdown = () => {
    setToggleRecommendedDropdown(!toggleRecommendedDropdown);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProducts();
      console.log(product, productsArray);
      const newProductArray = productsArray.concat(product);
      setProductsArray(newProductArray);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <div className="max-w-[1800px] -z-30 m-auto  lg:p-5">
        <div className="lg:flex justify-between py-5 border-y hidden">
          {" "}
          <div className="flex gap-5">
            <div className="font-semibold">3425 ITEMS</div>
            <div
              onClick={handleShowFilter}
              className="flex text-slate-400 underline gap-1 cursor-pointer"
            >
              <Image
                width={15}
                height={15}
                className="font-light transform rotate-[270deg] -z-20"
                src="/img/icons/arrow.svg"
                alt="Down arrow"
              />
              SHOW FILTER
            </div>
          </div>
          <div
            onClick={handleRecommendedDropdown}
            className="flex relative  font-semibold  cursor-pointer"
          >
            <div className="-z-40 flex gap-1 items-center">
              {" "}
              RECOMMENDED
              <Image
                width={15}
                height={15}
                className={`font-light ${
                  toggleRecommendedDropdown ? "rotate-180" : ""
                } transform duration-500 cursor-pointer`}
                src="/img/icons/arrow.svg"
                alt="Down arrow"
              />
            </div>
            <SortBy show={toggleRecommendedDropdown} />
          </div>
        </div>
        <div className="lg:hidden flex justify-between  border-y my-5">
          <div
            className="w-full p-3 border font-semibold text-center border-r cursor-pointer"
            onClick={handleShowMobileFilter}
          >
            FILTER
          </div>
          <div
            onClick={handleRecommendedDropdown}
            className="flex p-3 relative cursor-pointer justify-center w-full  items-center font-semibold gap-1"
          >
            <div className="-z-40 flex items-center gap-1">
              RECOMMENDED
              <Image
                width={15}
                height={15}
                className={`font-light ${
                  toggleRecommendedDropdown ? " rotate-180 " : ""
                } transform duration-500`}
                src="/img/icons/arrow.svg"
                alt="Down arrow"
              />
            </div>
            <SortBy show={toggleRecommendedDropdown} />
          </div>
        </div>
        <div className="w-full  flex lg:py-5">
          <div
            className={` transform transition-all duration-500 ${
              showFilter ? "w-1/4 mr-6" : "w-0"
            } overflow-hidden `}
          >
            {" "}
            <FilterBar />
          </div>
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-7">
              {productsArray?.map((product, i) => {
                return <ProductCard key={i} data={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden fixed bottom-0 ${
          showMobileFilter ? "w-full" : "w-0"
        } top-0 transform transition-all duration-500 
        left-0 bg-white min-h-screen  overflow-hidden`}
      >
        <div className="p-2">
          <FilterBar />
        </div>
        <div className="flex gap-3  p-2">
          <button
            onClick={handleShowMobileFilter}
            className="border p-2 w-full font-bold text-white rounded-md cursor-pointer bg-red-600"
          >
            Close
          </button>
          <button className="border p-2 w-full font-bold text-white rounded-md bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
