"use client";
import Header from "./components/Header";
import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";
import Image from "next/image";
import axios from "axios";
import Footer from "./components/Footer";
import SortBy from "./components/SortBy";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [toggleRecommendedDropdown, setToggleRecommendedDropdown] =
    useState(false);
  const [product, setProduct] = useState([]);
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
      const response = await axios.get("https://fakestoreapi.com/products");
      // const product = response.json();
      console.log(response.data);
      setProduct(response.data);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <Header />
      <div className="max-w-[1800px] m-auto lg:p-5">
        <div className="lg:flex justify-between py-5 border-y hidden">
          {" "}
          <div className="flex gap-5">
            <div className="font-semibold">3425 ITEMS</div>
            <div
              onClick={handleShowFilter}
              className="flex text-slate-400 underline gap-1"
            >
              <Image
                width={15}
                height={15}
                className="font-light transform rotate-[270deg]"
                src="/img/icons/arrow.svg"
                alt="Down arrow"
              />
              SHOW FILTER
            </div>
          </div>
          <div
            onClick={handleRecommendedDropdown}
            className="flex relative items-center font-semibold gap-1"
          >
            RECOMMENDED
            <Image
              width={15}
              height={15}
              className={`font-light ${
                toggleRecommendedDropdown ? "rotate-180" : ""
              } transform duration-500`}
              src="/img/icons/arrow.svg"
              alt="Down arrow"
            />
            <SortBy show={toggleRecommendedDropdown} />
          </div>
        </div>
        <div className="lg:hidden flex justify-between  border-y my-5">
          <div
            className="w-full p-3 border font-semibold text-center border-r"
            onClick={handleShowMobileFilter}
          >
            FILTER
          </div>
          <div
            onClick={handleRecommendedDropdown}
            className="flex relative p-3 justify-center w-full transform duration-500 items-center font-semibold gap-1"
          >
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
            {product.length > 0 && <ProductList products={product} />}
          </div>
        </div>
      </div>

      <Footer />

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
            className="border p-2 w-full font-bold text-white rounded-md bg-red-600"
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
}
