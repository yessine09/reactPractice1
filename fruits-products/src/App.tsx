import React from "react";
import FilterProductTable from "./components/FilterProductTable";
import { Products, PropsProducts } from "./interfaces/listProductProps";
import SerachBar from "./components/SerachBar";
import Test from "./components/test";
import TaskApp from "./components/TaskApp";
import TaskAppV1 from "./components/TaskAppV1";
import TaskAppV2 from "./components/TaskAppV2";

function App() {
  const listProducts: Products[] = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  //console.log(`the first item ${SerachBar}`);

  return (
    <>
      <h1>List of products </h1>
      <TaskApp />
      <TaskAppV1 />
      <TaskAppV2 />
      {/* <Test /> */}
      {/* <FilterProductTable Listproducts={listProducts} /> */}
    </>
  );
}

export default App;
