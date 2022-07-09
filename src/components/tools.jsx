/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from "react";
import "../styles/card.css";

export const Tools = () => {
  return (
    <Fragment>
      <div class="row space-rows" style={{ justifyContent: "center" }}>
      <div class="col-xl-2">
          <a href="https://mapasinteractivos.didactalia.net/comunidad/mapasflashinteractivos" style={{textDecoration:"none"}}>
            <div
              class="card cards-shadown cards-hover"
              data-aos="slide-right"
              data-aos-duration="950"
            >
              <div class="card-header">
                <span class="space">
                  <a href="">
                    <i class="fa fa-cloud-download" id="download-icon-2"></i>
                  </a>
                </span>
                <div class="cardheader-text">
                  <p id="cardheader-subtext-2">Mapas interactivos</p>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text sub-text-color">Aprendamos sobre los paises del mundo</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-xl-2">
          <a href=" https://vedoque.com/html5/mecanografia/mecanografia1/" style={{textDecoration:"none"}}>
            <div
              class="card cards-shadown cards-hover"
              data-aos="slide-right"
              data-aos-duration="950"
            >
              <div class="card-header">
                <span class="space">
                  <a href="">
                    <i class="fa fa-cloud-download" id="download-icon-2"></i>
                  </a>
                </span>
                <div class="cardheader-text">
                  <p id="cardheader-subtext-2">Mecanografia</p>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text sub-text-color">Aprendamos a utilizar el teclado de nuestra computadora</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-xl-2">
          <a href=" https://cienciasnaturales.didactalia.net/recurso/tabla-periodica-con-simbolos/b98cacb6-78b8-79b7-2ad6-7076ff11a779
https://cienciasnaturales.didactalia.net/" style={{textDecoration:"none"}}>
            <div
              class="card cards-shadown cards-hover"
              data-aos="slide-right"
              data-aos-duration="950"
            >
              <div class="card-header">
                <span class="space">
                  <a href="">
                    <i class="fa fa-cloud-download" id="download-icon-2"></i>
                  </a>
                </span>
                <div class="cardheader-text">
                  <p id="cardheader-subtext-2">Ciencias naturales</p>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text sub-text-color">Aprendamos de nuestros cuerpos y la naturaleza</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
