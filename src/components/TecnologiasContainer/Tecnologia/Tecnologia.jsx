import React from "react";
import {
  amazonWebServicesLogo,
  angularLogo,
  bootstrapLogo,
  cSharpLogo,
  css3Logo,
  djangoLogo,
  html5Logo,
  javaLogo,
  javascriptLogo,
  microsoftAzureLogo,
  netcoreLogo,
  pythonLogo,
  reactLogo,
  typescriptLogo,
  vueLogo,
} from "../../../assets/svgs";

export const Tecnologia = (props) => {
  const { nombre, tipoTecnologia, icono } = props.tecnologia;
  const iconos = {
    "amazon-web-services-logo.svg": amazonWebServicesLogo,
    "angular-logo.svg": angularLogo,
    "bootstrap-logo.svg": bootstrapLogo,
    "c-sharp-logo.svg": cSharpLogo,
    "css3-logo.svg": css3Logo,
    "django-logo.svg": djangoLogo,
    "html5-logo.svg": html5Logo,
    "java-logo.svg": javaLogo,
    "javascript-logo.svg": javascriptLogo,
    "microsoft-azure-logo.svg": microsoftAzureLogo,
    "netcore-logo.svg": netcoreLogo,
    "python-logo.svg": pythonLogo,
    "react-logo.svg": reactLogo,
    "typescript-logo.svg": typescriptLogo,
    "vue-logo.svg": vueLogo,
  };

  return (
    <>
      <img
        src={iconos[icono]}
        alt={icono}
        title={nombre}
        width="48px"
        className="m-2"
      />
    </>
  );
};
