import React from "react";
import { Route, Routes } from "react-router-dom";
import { CryptoInfo } from "./pages/CryptoInfo";
import { Home } from "./pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/:id" element={<CryptoInfo />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
