import "../styles/style.css";

export const Content = () => {
  return (
    <div className="d-flex text-center text-white">
      <div className="d-flex p-3 mx-auto flex-column contenido">
        <main className="px-3">
          <div className="text-center justify-content-center align-items-center p-3">
            <h1 className="titulo">DigitaLight</h1>
            <h2 className="subtitulo">Tu mochila digital</h2>
            <p className="lead mt-4 parrafo">
              Únete a nuestra comunidad y comparte tus conocimientos<br></br>
              Ayuda a muchos jovenes a seguir sus metas.
            </p>
            <button
              className="btn btn-lg btn-primary mt-3 col-4  btn-registrate"
            >
              Regístrate
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
