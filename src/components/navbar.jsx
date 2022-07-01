/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useContext, useState } from "react";
import Logo from "../img/footer.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [ciclo, setCiclo] = useState("");
  
  const info = (e) => {
    setCiclo(e)
    actions.enable(false)
    actions.cambiarCiclo(e);
    actions.listaGrados(e);
  };

  return (
    <Fragment>
      <nav
        className=""
        style={{
          backgroundColor: "#AAD8D3",
          borderBottom: "1px solid black",
          textAlign: "center",
        }}
      >
        <div className="">
          <a>
            <img src={Logo} alt="" style={{ width: 150, height: 130 }} />
          </a>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#AAD8D3", textAlign: "left" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ justifyContent: "space-evenly" }}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <Link to="/">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    id="inicio"
                  >
                    Inicio
                  </a>
                </li>
              </Link>

              <Link to="/ciclos/primaria">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    id="primaria"
                    onClick={(e) => {
                      info("Primaria");
                      
                    }}
                  >
                    Primaria
                  </a>
                </li>
              </Link>
              <Link to="/ciclos/secundaria">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    id="asignaturas"
                    onClick={(e) => {
                      info("Secundaria");
                    }}
                  >
                    Secundaria
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
