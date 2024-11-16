import React from "react";
import { hugoPozueloMartinez } from "../../../assets/imgs";
import {
  cvFileWhite,
  githubLogo,
  linkedinLogo,
  sentEmailWhite,
} from "../../../assets/svgs";

export const Perfil = (props) => {
  const { nombre, profesion, sobreMi, correo, foto, redesSociales } =
    props.perfil;
  const documento = props.documento;

  return (
    <div className="container rounded shadow p-5 mb-5">
      <div className="row">
        <div className="col col-12 col-md-4 order-md-2 mb-3">
          <img
            src={hugoPozueloMartinez}
            alt={foto}
            className="img-fluid rounded-circle mb-3"
          />

          <div className="d-flex justify-content-around">
            {redesSociales &&
              redesSociales.map((redSocial, index$) => (
                <a key={index$} href={redSocial.url} target="blank">
                  <img
                    src={
                      redSocial.nombre === "LinkedIn"
                        ? linkedinLogo
                        : githubLogo
                    }
                    alt={redSocial.icono}
                    title={redSocial.nombre}
                    width="48px"
                  />
                </a>
              ))}
          </div>
        </div>

        <div className="col d-flex flex-column justify-content-center">
          <h1 className="display-3">{nombre}</h1>
          <h2 className="display-6">{profesion}</h2>
          <p className="lead">{sobreMi}</p>
          <div>
            <a href={`mailto:${correo}`} className="btn btn-primary me-2">
              <img
                src={sentEmailWhite}
                alt="sent-email-white.svg"
                width="20px"
              />{" "}
              Contactar
            </a>
            <a
              href={documento}
              download="Hugo_Pozuelo_Martinez_-_CV_(Sencillo)"
              className="btn btn-success"
            >
              <img src={cvFileWhite} alt="cv-file-white.svg" width="20x" />{" "}
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
