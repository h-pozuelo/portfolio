import React, { useEffect, useState } from "react";
import { Perfil } from "./Perfil/Perfil";
import data from "../../data/perfil.json";
import hugoPozueloMartinezCvSencillo from "../../assets/docs/Hugo_Pozuelo_Martinez_-_CV_(Sencillo) (2).pdf";

export const PerfilContainer = () => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    setPerfil(data);
  }, []);

  return (
    <div>
      <Perfil perfil={perfil} documento={hugoPozueloMartinezCvSencillo} />
    </div>
  );
};
