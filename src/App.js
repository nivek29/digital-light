import React from "react";
import "../src/index.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./router/routing"; 
import { injectContext } from "./store/appContext";


const App = () => {
  return (

    <React.StrictMode>
      <BrowserRouter>
        <Routing></Routing>
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default injectContext (App);


