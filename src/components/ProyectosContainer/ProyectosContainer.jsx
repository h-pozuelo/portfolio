import React, { useEffect, useState } from "react";
import { Proyectos } from "./Proyectos/Proyectos";

export const ProyectosContainer = ({ data }) => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(data);
  }, [data]);

  return (
    <div>
      <Proyectos proyectos={proyectos} />
    </div>
  );
};
