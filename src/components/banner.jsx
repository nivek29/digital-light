/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import "../styles/style.css";

export const Banner = () => {
  const { store, actions } = useContext(Context);
  // const [disable, setDisable] = useState(false);
  const [selection, setSelection] = useState("");

  const selectionGrade = (input) => {
    actions.listaMaterias(input);
    actions.enable(true);
    // setDisable(store.disable);
    // console.log(store.materias);
    setSelection(store.materias);
  };

  return (
    <Fragment>
      {store.ciclo[0].tipo === "Primaria" && (
        <div
          className="bg-light border rounded border-light hero-technology jumbotron primaria "
          style={{ marginTop: "-50px", height: "439px" }}
        >
          <p
            className="hero-title "
            style={{ fontSize: "23px", marginTop: "-50" }}
          >
            {store.ciclo[0].tipo}
          </p>
          <p className="hero-subtitle" style={{ fontSize: "23px" }}>
            {store.ciclo[0].msg}
          </p>
        </div>
      )}
      {store.ciclo[0].tipo === "Secundaria" && (
        <div
          className="bg-light border rounded border-light hero-technology jumbotron secundaria "
          style={{ marginTop: "-50px", height: "439px" }}
        >
          <p
            className="hero-title "
            style={{ fontSize: "23px", marginTop: "-50" }}
          >
            {store.ciclo[0].tipo}
          </p>
          <p className="hero-subtitle" style={{ fontSize: "23px" }}>
            {store.ciclo[0].msg}
          </p>
        </div>
      )}
      <div
        className="row py-2"
        style={{ justifyContent: "center", backgroundColor: "#AAD8D3" }}
      >
        <div className="col-md-12 col-xl-12  " style={{ textAlign: "center" }}>
          {store.grados.map((item, i) => {
            return (
              <button
                key={i}
                className="btn btn-secondary btn-lg m-2 px-5"
                onClick={(e) => {
                  selectionGrade(item);
                  console.log(store.materias);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      {!!store.disable && (
        <div
          className=""
          style={{
            background: "#dec6c587",
            marginTop: "0px",
            paddingBottom: "15px",
            paddingTop: "15px",
          }}
        >
          <div className="row my-1  " style={{ justifyContent: "center" }}>
            {store.materias[0].asignatura.map((index, y) => {
              return (
                <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-1 my-2 lista fondo">
                  <div>
                    <h3 className="text-center text-light mt-1">
                      {store.materias[0].asignatura[y].nombre}
                    </h3>
                    <hr className="colorF" />
                    {store.materias[0].asignatura[y].contenido.map((f, t) => {
                      return (
                        <a style={{textDecoration: "none", color:"black"}} target="_blank" key={t} href={store.materias[0].asignatura[y].url[t]}>
                          <div className="col-xs-12 text-center mb-4 bg-white">
                            <h6>
                              {store.materias[0].asignatura[y].contenido[t]}
                            </h6>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};
