import Componente  from "./components/Componente";
import Propiedades from "./components/Propiedades";
import React from "react";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES7, EventosES6, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";

const App = () => {
  
  return (
    <div className="container text-center text-light">
      <CicloVida />
      <hr /><br />
      <Padre />
      <hr /><br />
      <MasSobreEventos />
      <hr /><br />
      <EventosES7 />
      <hr /><br />
      <EventosES6 />
      <hr /><br />
      <RenderizadoElementos />
      <hr /><br />
      <RenderizadoCondicional />
      <hr /><br />
      <Estado />
      <hr /><br />
      <Componente />
      <hr />
      <Propiedades 
        cadena="esto es una cadena de texto"
        numero={20}
        booleano={true}
        arreglo={[1,2,3,4,5]}
        objeto={{nombre:"Emanuel", apellido:"Gomila"}}
        funcion={(num) => num*num}
      />
    </div>
  );
}

export default App;
