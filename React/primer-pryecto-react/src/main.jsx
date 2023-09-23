import React from "react";
import ReactDOM from "react-dom/client";
import { ContadorApp } from "./ContadorApp";
import ListadoApp from "./ListadoApp";
import { ListadoArregloApp } from "./ListadoArregloApp";
import { UserApp } from "./UserApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContadorApp />
    <ListadoApp />
    <ListadoArregloApp />
    <UserApp />
  </React.StrictMode>
);
