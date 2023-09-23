import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Inicio from "../components/Inicio";
import Productos from "../Components/Productos";
import Footer from "../Components/Footer";
import Otros from "../Components/Otros";
import Login from "../Components/Login";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="Productos" element={<Productos/>}></Route>
        <Route path="Otros" element={<Otros/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
