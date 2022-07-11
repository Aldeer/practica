import Componente  from "./components/Componente";
import Propiedades from "./components/Propiedades";
import React from "react";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";

const App = () => {
  
  return (
    <div className="container bg-dark text-center text-light">
      
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
