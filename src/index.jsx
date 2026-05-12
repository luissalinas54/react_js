import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//ESTE ES EL METODO PARA RENDERIZAR NUESTRA APP EN EL DOM, SELECCIONANDO EL ELEMENTO RAIZ DONDE SE MOSTRARÁ NUESTRA APLICACIÓN
//LOS METODOS ROOT Y RENDER SON LOS ENCARGADOS DE CREAR LA RAIZ DE NUESTRO PROYECTO Y RENDERIZAR NUESTRA APLICACIÓN EN ESE ELEMENTO RAIZ
//QUE ES EL DIV CON ID "ROOT" EN NUESTRO ARCHIVO HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
