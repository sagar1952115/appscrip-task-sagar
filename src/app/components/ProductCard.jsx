import Image from "next/image";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="shadow-md p-2">
      <div className="gap-4  w-[300px] h-[400px] flex flex-col items-center">
        <div className="h-full overflow-hidden flex items-center ">
          <Image
            width={250}
            height={100}
            alt="Image"
            className=""
            src={data.image}
          />
        </div>
        <div className="flex  mt-auto">
          <div className="flex w-full flex-col">
            <div className="line-clamp-1 uppercase font-semibold">
              {data.title}
            </div>
            <div className="text-sm text-[#888792] tracking-tighter">
              Signin or Create an account to see the price
            </div>
          </div>
          <div className="flex items-center ">
            <Image
              alt="Heart icon"
              width={30}
              height={30}
              src="/img/icons/like.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
