import React, { useEffect, useState } from "react";
import { Tecnologias } from "./Tecnologias/Tecnologias";
import data from "../../data/perfil.json";

export const TecnologiasContainer = () => {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    setTecnologias(data.tecnologias);
  }, []);

  return (
    <div>
      <Tecnologias tecnologias={tecnologias} />
    </div>
  );
};
