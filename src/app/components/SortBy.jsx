import React from "react";

const SortBy = ({ show }) => {
  return (
    <div
      className={`absolute overflow-hidden w-max border ${
        show ? "h-max" : "h-0 hidden"
      }  bg-white  top-10 lg:right-0  uppercase p-4 font-light`}
    >
      <div className="flex flex-col h-full overflow-hidden items-end gap-3">
        <div className="font-bold">Recommended</div>
        <div>Newest first</div>
        <div>popular</div>
        <div>Price : High to low</div>
        <div>Price : Low to high</div>
      </div>
    </div>
  );
};

export default SortBy;
