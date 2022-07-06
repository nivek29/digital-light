/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import Logo from "../img/footer.png";

export const Footer = () => {
  return (
    <Fragment>
      <div className="" style={{background:"#AAD8D3"}}>
        <div className="row">
          <div className="mt-2" style={{textAlignLast: "center"}}>
            <a>
              <img src={Logo} alt="" style={{ width: 90, height: 90, textAlignLast: "center" }} />
            </a>
          </div>
          <div className="col-lg-12 text-center text-lg-center my-auto h-100">
            <ul className="list-inline mb-2">


              <li className="list-inline-item">
                <span>⋅</span>
              </li>
              <li className="list-inline-item">
                <a href="#">Terminos de uso</a>
              </li>
              <li className="list-inline-item">
                <span>⋅</span>
              </li>
              <li className="list-inline-item">
                <a href="#">Politicas de Privacidad</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              © Digital Light 2022. Derechos Reservados.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
