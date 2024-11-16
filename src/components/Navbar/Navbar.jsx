import React from "react";

export const Navbar = ({ callbackClick }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary shadow-sm">
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-center">
            <li className="nav-item me-5">
              <button
                className="nav-link"
                value="perfil"
                onClick={callbackClick}
              >
                Sobre Mí
              </button>
            </li>
            <li className="nav-item me-5">
              <button
                className="nav-link"
                value="habilidades"
                onClick={callbackClick}
              >
                Habilidades
              </button>
            </li>
            <li className="nav-item me-5">
              <button
                className="nav-link"
                value="proyectos"
                onClick={callbackClick}
              >
                Proyectos
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                value="maquetas-web"
                onClick={callbackClick}
              >
                Maquetas Web
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
