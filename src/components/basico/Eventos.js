import React, { Component } from 'react';

//property initializer
export class EventosES7 extends Component {
  state = {
    contador:0,
  };

  sumar = (e) => {
    this.setState({
      contador: this.state.contador+1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador-1,
    });
  };

  render() {
    return(
      <div>
        <h2>Eventos en Componentes de clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  };
};

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador:0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({
      contador: this.state.contador+1,
    });
  };

  restar() {
    this.setState({
      contador: this.state.contador-1,
    });
  };

  render() {
    return(
      <div>
        <h2>Eventos en Componentes de clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  };
};

function Boton (props) {
  return(
    <button 
      className='btn btn-warning'
      onClick={props.myOnClick}
    >
      Boton hecho Componente
    </button>
  );
};

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e.nativeEvent);
    console.log(msg);
  };

  render() {
    return(
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button 
          className='btn btn-primary' 
          onClick={(e) => this.handleClick(e, "Hola Aldeer")}
        >
          Saludar
        </button>

        {/*Evento Perzonalizado*/}
        <Boton
          myOnClick={(e) => {
            this.handleClick(e,"Hola Aldeer")
          }} 
        />
      </div>
    );
  };
};