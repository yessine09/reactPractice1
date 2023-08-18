import React, { useState } from "react";
import SerachBar from "./SerachBar";
import { Products } from "../interfaces/listProductProps";
import ProductTable from "./ProductTable";

export interface PropsFilterProducts {
  Listproducts: Products[];
}

const FilterProductTable = ({ Listproducts }: PropsFilterProducts) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <SerachBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={Listproducts}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};

export default FilterProductTable;
