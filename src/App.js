import { useRef } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { PerfilContainer } from "./components/PerfilContainer/PerfilContainer";
import { ProyectosContainer } from "./components/ProyectosContainer/ProyectosContainer";
import maquetasWeb from "./data/maquetas-web.json";
import proyectos from "./data/proyectos.json";
import { TecnologiasContainer } from "./components/TecnologiasContainer/TecnologiasContainer";

function App() {
  const perfilRef = useRef(null);
  const habilidadesRef = useRef(null);
  const proyectosRef = useRef(null);
  const maquetasWebRef = useRef(null);

  const refs = {
    perfil: perfilRef,
    habilidades: habilidadesRef,
    proyectos: proyectosRef,
    "maquetas-web": maquetasWebRef,
  };

  const handleClick = (e) => {
    refs[e.target.value].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar callbackClick={handleClick} />

      <div className="container container-fluid pt-5">
        <div ref={perfilRef} id="#perfil">
          <PerfilContainer />
        </div>

        <div ref={habilidadesRef} id="#habilidades">
          <h2 className="display-1 text-center border-bottom mb-5">
            Habilidades
          </h2>
          <TecnologiasContainer />
        </div>

        <div ref={proyectosRef} id="#proyectos">
          <h2 className="display-1 text-center border-bottom mb-5">
            Proyectos
          </h2>
          <ProyectosContainer data={proyectos} />
        </div>

        <div ref={maquetasWebRef} id="#maquetas-web">
          <h2 className="display-1 text-center border-bottom mb-5">
            Maquetas Web
          </h2>
          <ProyectosContainer data={maquetasWeb} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
