import React from "react";
import { filterData } from "../filterData";
import FilterBox from "./FilterBox";

const FilterBar = () => {
  return (
    <div>
      {filterData.map((data, i) => {
        return <FilterBox key={i} data={data} />;
      })}
    </div>
  );
};

export default FilterBar;
