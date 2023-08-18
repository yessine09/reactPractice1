import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { Products, PropsProducts } from "../interfaces/listProductProps";

interface PorpsProductsTable {
  products: Products[];
}

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows: any = [];
  let lastCategory: any = null;
  let f = null;
  products.forEach((product) => {
    if (
      (f = product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1)
    ) {
      console.log("mch mwjoud", f);

      return;
    }
    console.log("mwjoud");

    if (!product.stocked && inStockOnly) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  console.log("rows", rows);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
