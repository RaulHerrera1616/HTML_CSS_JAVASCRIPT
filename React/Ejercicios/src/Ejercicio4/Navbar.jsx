import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav >
      <div ><Link to={"/main1"}>Main1</Link></div>
      <div ><Link to={"/main2"}>Main2</Link></div>
    </nav>
  );
};
