import React from "react";
import "./Proyecto.css";
import { externalLink, githubLogo } from "../../../assets/svgs";

export const Proyecto = (props) => {
  const { titulo, descripcion, url, github } = props.proyecto;

  return (
    <div
      className={`row mb-5 justify-content-${
        props.index % 2 === 0 ? "start" : "end"
      }`}
    >
      <div className="col col-12">
        <div className="d-flex justify-content-between mb-3">
          <a
            href={url || github}
            target="blank"
            className="link-dark display-6 text-decoration-none"
          >
            {titulo}
            <img
              src={externalLink}
              alt="external-link-svgrepo-com.svg"
              width="24px"
              style={{ verticalAlign: "top" }}
            />
          </a>
          <a href={github} target="blank" className="btn btn-light">
            <img
              src={githubLogo}
              alt="github-mark.svg"
              width="24px"
              style={{ verticalAlign: "middle" }}
            />{" "}
            Ver en GitHub
          </a>
        </div>

        {descripcion && (
          <div className="card mb-3 border-0 shadow">
            <div className="card-body">
              <p className="card-text">{descripcion}</p>
            </div>
          </div>
        )}

        {url && (
          <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
            <iframe src={url} title={titulo} className="w-100"></iframe>
          </div>
        )}
      </div>
    </div>
  );
};
