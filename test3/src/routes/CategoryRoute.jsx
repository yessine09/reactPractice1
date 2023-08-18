import React from "react";
import Animals from "../pages/categories/animals/Animals";
import Cats from "../pages/categories/animals/cats/Cats";
import CatDetails from "../pages/categories/animals/cats/CatDetails";
import Dogs from "../pages/categories/animals/dogs/Dogs";
import DogsDetails from "../pages/categories/animals/dogs/DogsDetails";
import Furnitures from "../pages/categories/furnitures/Furnitures";
import { Route, Routes } from "react-router-dom";

const CategoryRoute = () => {
  return (
    <Routes>
      {/* <Route index element={<Categorie />} /> */}
      <Route path="animals">
        <Route index element={<Animals />} />
        <Route path="cats" element={<Cats />} />
        <Route path="cats/:id" element={<CatDetails />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:id" element={<DogsDetails />} />
        {/* <Route path="dogs/new" element={<Dogs />} /> // yemchi l hethy 9bal el dogs/:id (5ater priorité lel match static) */}
      </Route>
      <Route path="furnitures">
        <Route index element={<Furnitures />} />
        {/* <Route path="tables" element={<table />} />
            <Route path="dogs/:id" element={<DogsDetails />} /> */}
      </Route>
    </Routes>
  );
};

export default CategoryRoute;
