import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../MainView/Home";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ProductDetail from "../MainView/ProductDetail";
import Cart from "../MainView/Cart";

export const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/shop" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/shop/product/:id" element={<ProductDetail />}></Route>
    </Routes>
  </BrowserRouter>
);
