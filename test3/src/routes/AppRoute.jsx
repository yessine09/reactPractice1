import React from "react";
import { Route, Routes } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

import Profile from "../pages/Profile";

import Categorie from "../pages/categories/Categorie";

import Animals from "../pages/categories/animals/Animals";
import Furnitures from "../pages/categories/furnitures/Furnitures";

import Cats from "../pages/categories/animals/cats/Cats";
import CatDetails from "../pages/categories/animals/cats/CatDetails";

import Dogs from "../pages/categories/animals/dogs/Dogs";
import DogsDetails from "../pages/categories/animals/dogs/DogsDetails";
import CategoryRoute from "./CategoryRoute";
import NotFound from "../pages/NotFound";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/categories" element={<Categorie/>} /> */}
      <Route path="/categories" element={<Categorie />}>
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
      </Route>

      <Route path="*" element={<NotFound />} />

      {/* <Route path="/categories/*" element={<CategoryRoute />} /> */}

      {/* <Route path="/categories/furnitures" element={<Furnitures/>} /> */}
    </Routes>
  );
};

export default AppRoute;
