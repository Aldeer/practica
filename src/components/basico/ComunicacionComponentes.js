import React, { Component, Fragment } from 'react';

export default class Padre extends Component {
  state = {
    contador:0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return(
      <Fragment>
        <h2>Comunicacion entre Componentes</h2>
        <p>
          contador: <b>{this.state.contador}</b>
        </p>
        <Hijo 
          msg="Mensaje para el hijo 1"
          incrementarContador={this.incrementarContador}
        />
        <Hijo msg="Mensaje para el hijo 2"/>
      </Fragment>
    );
  };
};

function Hijo(props) {
  return(
    <Fragment>
      <h3>{props.msg}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </Fragment>
  );
};