import React,{ useState } from 'react';

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return(
    <>
      <h2>Hooks - useState</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <p>{props.titulo}</p>
      <p>{contador}</p>
    </>
  );
};

ContadorHooks.defaultProps = {
  titulo: "Contador de seguidores",
}