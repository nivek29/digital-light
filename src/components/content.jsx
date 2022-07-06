import { Fragment } from "react";
import "../styles/style.css";

export const Content = () => {
  return (
    <Fragment>
    <div className="d-flex text-center text-white">
      <div className="d-flex p-1 mx-auto flex-column contenido">
        <main className="px-3">
          <div className="text-center justify-content-center align-items-center p-3">
            <p className="subtitulo">Tu mochila digital</p>
            <p className="lead mt-4 parrafo">
              Únete a nuestra comunidad y comparte tus conocimientos<br></br>
              Ayuda a muchos jovenes a seguir sus metas.
            </p>

          </div>
        </main>
      </div>
    </div>
      <section className="showcase">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-6 text-white order-lg-2 showcase-img" style={{ backgroundImage: "url(https://www.andaluciaescoop.org/wp-content/uploads/2020/03/colegio-antonio-machado-Sevilla.jpg)"}}><span></span></div>
                <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                    <h2>Fully Responsive Design</h2>
                    <p className="lead mb-0">When you use a theme created with Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: "url(https://www.revistalimpiezas.es/wp-content/uploads/sites/4/2021/05/colegios-gi-900x600.jpg)"}}><span></span></div>
                <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                    <h2>Updated For Bootstrap 5</h2>
                    <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes are now using Bootstrap 5!</p>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 text-white order-lg-2 showcase-img" style={{ backgroundImage: "url(https://educacion30.b-cdn.net/wp-content/uploads/2018/03/gestion-escolar.jpg)"}}><span></span></div>
                <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                    <h2>Easy to Use &amp;&nbsp;Customize</h2>
                    <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                </div>
            </div>
        </div>
    </section>
    </Fragment>
    
  );
};
