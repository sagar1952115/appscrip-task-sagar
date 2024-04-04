import Image from "next/image";
import React, { useState } from "react";

const FilterBox = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const handleShowDropdown = () => {
    setVisible(!visible);
  };
  return (
    <div className="flex flex-col border-y  gap-2 py-3">
      <div className="flex justify-between  items-center">
        <div className="font-semibold uppercase">{data.name}</div>
        <div onClick={handleShowDropdown}>
          <Image
            width={15}
            height={15}
            alt="Down arrow"
            src="/img/icons/arrow.svg"
            className={`${
              visible ? "rotate-[180deg]" : ""
            } transform duration-300`}
          />
        </div>
      </div>

      {visible ? (
        <div className="flex flex-col gap-1">
          <div className="hover:opacity-80 cursor-pointer">All</div>
          <div className="hover:opacity-80 cursor-pointer">Option1</div>
          <div className="hover:opacity-80 cursor-pointer">Option2</div>
          <div className="hover:opacity-80 cursor-pointer">Option3</div>
          <div className="hover:opacity-80 cursor-pointer">Option4</div>
        </div>
      ) : (
        <div>{data.selected}</div>
      )}
    </div>
  );
};

export default FilterBox;
