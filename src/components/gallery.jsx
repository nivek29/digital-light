/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Gallery = () => {
  return (
    <section
      className="photo-gallery pt-1"
      style={{
        backgroundColor: "#393E46",
        fontFamily: "Inconsolata , monospace",
        color: "#EEEEEE",
      }}
    >
      <div className="">
        <div className="row">
          <div className="col-md-12 col-xl-12 mt-4 " style={{ textAlign: "center"}}>
            <p className="" style={{fontSize: "25px"}}>Nuestras asignaturas</p>

          </div>
        </div>
        <div
          className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos mt-2"
          data-bss-baguettebox=""
          style={{textAlign: "center",fontSize: "23px"}}
        >
          <div className="col item  mb-9">
            <a href="https://static.vecteezy.com/system/resources/thumbnails/005/880/012/small/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg">
              <img
                className="img-fluid"
                style={{borderRadius:"35px"}}
                src="https://static.vecteezy.com/system/resources/thumbnails/005/880/012/small/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg"
              />
            </a>
            <p>Matematicas</p>
          </div>
          <div className="col item">
            <a href="https://unamglobal.unam.mx/wp-content/uploads/2018/11/Quijote-300x200.jpg">
              <img
                className="img-fluid"
                style={{borderRadius:"35px"}}
                src="https://unamglobal.unam.mx/wp-content/uploads/2018/11/Quijote-300x200.jpg"
              />
            </a>
            <p>Literatura</p>
          </div>
          <div className="col item">
            <a href="https://static.vecteezy.com/system/resources/thumbnails/003/510/871/small/world-atlas-continuous-one-line-drawing-of-world-map-minimalist-illustration-design-on-white-background-isolated-simple-line-modern-graphic-style-hand-drawn-graphic-concept-for-education-vector.jpg">
              <img
                className="img-fluid"
                style={{borderRadius:"35px"}}
                src="https://static.vecteezy.com/system/resources/thumbnails/003/510/871/small/world-atlas-continuous-one-line-drawing-of-world-map-minimalist-illustration-design-on-white-background-isolated-simple-line-modern-graphic-style-hand-drawn-graphic-concept-for-education-vector.jpg"
              />
            </a>
            <p>Geografia</p>
          </div>
          <div className="col item">
            <a href="https://static.vecteezy.com/system/resources/thumbnails/003/594/524/small/single-one-line-drawing-scientist-with-celebrate-gesture-and-holding-measuring-tube-to-examining-chemical-solution-to-make-vaccine-modern-continuous-line-draw-design-graphic-illustration-vector.jpg">
              <img
                className="img-fluid"
                style={{borderRadius:"35px"}}
                src="https://static.vecteezy.com/system/resources/thumbnails/003/594/524/small/single-one-line-drawing-scientist-with-celebrate-gesture-and-holding-measuring-tube-to-examining-chemical-solution-to-make-vaccine-modern-continuous-line-draw-design-graphic-illustration-vector.jpg"
              />
            </a>
            <p>Ciencias Naturales</p>
          </div>
          <div className="col item">
            <a href="https://edu.tauformar.com/wp-content/uploads/2022/01/ingles-b1a-300x200.jpg">
              <img
                className="img-fluid"
                style={{borderRadius:"35px"}}
                src="https://edu.tauformar.com/wp-content/uploads/2022/01/ingles-b1a-300x200.jpg"
              />
            </a>
            <p>Ingles</p>
          </div>
          <div className="col item">
            <a href="http://placehold.jp/300x200.png">
              <img className="img-fluid" style={{borderRadius:"35px"}} src="https://cdn01.alison-static.net/courses/2672/alison_courseware_intro_2672.jpg" />
            </a>
            <p>Fisica</p>
          </div>
        </div>
      </div>
    </section>
  );
};
