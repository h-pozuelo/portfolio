import React from "react";
import { Tecnologia } from "../Tecnologia/Tecnologia";

export const Tecnologias = (props) => {
  const { tecnologias } = props;
  const tipos = [
    ...new Set(tecnologias.map((tecnologia) => tecnologia.tipoTecnologia)),
  ];
  const filtradas = tipos.map((tipo) =>
    tecnologias.filter((tecnologia) => tecnologia.tipoTecnologia === tipo)
  );

  return (
    <div className="container">
      <div className="row">
        {filtradas &&
          filtradas.map((x, xIndex$) => (
            <div className="col col-12 col-lg-4 mb-3">
              <h3 className="display-6 text-center mb-3">
                {x[0].tipoTecnologia}
              </h3>

              <div
                key={xIndex$}
                className="d-flex flex-wrap justify-content-center align-items-center rounded p-5 mb-3 border-0 shadow"
              >
                {x &&
                  x.map((y, yIndex$) => (
                    <Tecnologia key={yIndex$} tecnologia={y} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
