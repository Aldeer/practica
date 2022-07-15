import React from 'react';
import PropTypes  from 'prop-types';

function Propiedades(props) {
  return (
    <div>
      <h2>{props.msgDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + "-" +props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
      </ul>
    </div>
  );
}

//objeto prop types
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
//propiedad pasada por defecto
Propiedades.defaultProps = {
  msgDefecto: "props por defecto",
};

export default Propiedades;