"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {" "}
      <div className="sticky top-0  bg-white z-100 flex  flex-col w-full items-center gap-4 border-b-2">
        <div className="  flex w-full bg-white justify-between items-center  lg:px-10 p-5">
          <div className="w-1/4  flex items-center lg:justify-start  gap-5">
            <Image
              onClick={handleShowNav}
              width={30}
              height={30}
              alt="Hamburger icon"
              className="lg:hidden cursor-pointer"
              src="/img/icons/hamburger.svg"
            />
            <Image
              width={30}
              height={30}
              className=""
              alt="Logo"
              src="/img/logo/logo.png"
            />
          </div>
          <div className="text-center  w-2/4">
            <h2 className="font-bold text-xl lg:text-4xl">LOGO</h2>
          </div>
          <div className="flex w-1/4 items-center gap-2 justify-between">
            <Image
              height={30}
              width={30}
              src="/img/icons/search.png"
              alt="Search icon"
            />
            <Image
              height={30}
              width={30}
              src="/img/icons/like.png"
              alt="Like icon"
            />
            <Image
              width={30}
              height={30}
              src="/img/icons/bag.png"
              alt="Cart bag"
            />
            <Image
              width={30}
              height={30}
              className="hidden lg:flex"
              src="/img/icons/user.png"
              alt="User Profile icon"
            />
            <div className=" hidden lg:flex items-center gap-2">
              <h6 className="text-xl">ENG</h6>
              <Image
                width={20}
                height={20}
                src="/img/icons/arrow.svg"
                alt="Down arrow"
              />
            </div>
          </div>
        </div>
        {/* navbar */}
        <div
          className={`lg:flex transform transition-all duration-500  w-full lg:w-1/2  ${
            showNav ? "h-max" : "h-0"
          } lg:h-max overflow-hidden  items-center justify-start lg:justify-center font-bold  `}
        >
          <div className=" flex flex-col lg:flex-row justify-between items-start gap-5 lg:items-center w-full p-5">
            <div className="">SHOP</div>
            <div className="">SKILLS</div>
            <div className="">STORIES</div>
            <div className="">ABOUT</div>
            <div className="">CONTACT US</div>
          </div>
        </div>
      </div>
      <div className="lg:hidden text-sm p-5">
        <span className="text-slate-400">HOME</span>{" "}
        <span className="font-light text-slate-400">|</span> SHOP
      </div>
      <div className="flex m-auto lg:my-10 flex-col items-center  gap-4 justify-between w-full lg:w-1/2">
        <h1 className="uppercase text-center text-[20px]  lg:text-[45px]">
          Discover our products
        </h1>
        <p className="text-center text-sm lg:text-lg px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio atque
          delectus dolore unde praesentium iure In, blanditiis velit.
        </p>
      </div>
    </>
  );
};

export default Header;
