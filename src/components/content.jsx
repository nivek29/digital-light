/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import "../styles/style.css";

export const Content = () => {
  return (
    <Fragment>
      <div
        className="bg-light border rounded border-light hero-technology jumbotron "
        style={{ marginTop: "-6px" }}
      >
        <p className="hero-title " style={{fontSize: "23px", marginTop:"-50"}}>Tu mochila digital</p>
        <p className="hero-subtitle"  style={{fontSize: "23px"}}>
          Únete a nuestra comunidad y comparte tus conocimientos<br></br>
          Ayuda a muchos jovenes a seguir sus metas.
        </p>
        <p style={{backGround:"black"}}>
          <a
          style={{background:"#393E46", border:"#393E46"}}
            className="btn btn-primary btn-lg hero-button"
            role="button"
            href="#"
          >
            Learn more
          </a>
        </p>
      </div>

      <section className="showcase">
        <div
          className="container-fluid p-0"
          style={{ background: "#dec6c587" }}
        >
          <div className="row g-0">
            <div
              className="col-lg-6 text-white order-lg-2 showcase-img"
              style={{
                backgroundImage:
                  "url(https://www.andaluciaescoop.org/wp-content/uploads/2020/03/colegio-antonio-machado-Sevilla.jpg)",
              }}
            >
              <span></span>
            </div>
            <div className="col-lg-6 my-auto order-lg-1 showcase-text">
              <p className="lead mb-0" style={{fontSize: "23px"}}>
                Ejercicios resueltos a nivel básico, intermedio y avanzado.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{
                backgroundImage:
                  "url(https://www.revistalimpiezas.es/wp-content/uploads/sites/4/2021/05/colegios-gi-900x600.jpg)",
              }}
            >
              <span></span>
            </div>
            <div className="col-lg-6 my-auto order-lg-1 showcase-text">
              <p className="lead mb-0" style={{fontSize: "23px"}}>
                Somos una herramienta que permite la gestión y publicación de los
                contenidos utilizados en los cursos del temario del MEP.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 text-white order-lg-2 showcase-img"
              style={{
                backgroundImage:
                  "url(https://educacion30.b-cdn.net/wp-content/uploads/2018/03/gestion-escolar.jpg)",
              }}
            >
              <span></span>
            </div>
            <div className="col-lg-6 my-auto order-lg-1 showcase-text">
              
              <p className="lead mb-0" style={{fontSize: "23px"}}>
                La plataforma proporciona oportunidades a los estudiantes de obtener informacion relevante de sus asignaturas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
