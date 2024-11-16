import React from "react";
import { Proyecto } from "../Proyecto/Proyecto";

export const Proyectos = (props) => {
  const { proyectos } = props;

  return (
    <div className="container">
      {proyectos &&
        proyectos.map((proyecto, index$) => (
          <Proyecto key={index$} index={index$} proyecto={proyecto} />
        ))}
    </div>
  );
};
