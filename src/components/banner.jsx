import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signatures } from "../components/signatures";
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
      <div
        className="row py-5"
        style={{ justifyContent: "center", backgroundColor: "#EEEEEE" }}
      >
        <div className="col-md-12 col-xl-12  " style={{ textAlign: "center" }}>
          <h2 className="ms-4">{store.ciclo[0].tipo}</h2>
          <p className="ms-4">{store.ciclo[0].msg}</p>
        </div>

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
        <div className="container">
          <div className="row my-3  " style={{ justifyContent: "center" }}>
            {store.materias[0].asignatura.map((index, y) => {
              return (
                <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-1 my-2 lista fondo">
                  <div>
                    <h3 className="text-center text-light mt-3">
                      {store.materias[0].asignatura[y].nombre}
                    </h3>
                    <hr className="colorF" />
                    {store.materias[0].asignatura[y].contenido.map((f, t) => {
                      return (
                        <div className="col-xs-12 text-center mb-4 bg-white">
                          <h6>{store.materias[0].asignatura[y].contenido[t]}</h6>
                        </div>
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
