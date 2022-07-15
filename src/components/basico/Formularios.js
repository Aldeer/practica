import React, { Fragment, useState } from 'react';

export default function Formularios() {
  const [forms, setForms] = useState({});

  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.checked,
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulariose ha enviado");
  };
  return(
    <Fragment>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          value={forms.nombre} 
          onChange={handleChange}
        />
          <p>Elige tu sabr JS Favorito:</p>
          <input 
            type="radio"
            id=""
            name="sabor"
            value=""
            onChange={handleChange}
          />
          <label htmlFor="vanilla">Vanilla </label>
          <input 
            type="radio"
            id="React"
            name="sabor"
            value="React"
            onChange={handleChange}
          />
          <label htmlFor="React">React </label>
          <input 
            type="radio"
            id="Angular"
            name="sabor"
            value="angular"
            onChange={handleChange}
          />
          <label htmlFor="angular">Angular </label>
          <input 
            type="radio"
            id="vue"
            name="sabor"
            value="vue"
            onChange={handleChange}
          />
          <label htmlFor="vue">Vue </label>
          <input 
            type="radio"
            id="svelt"
            name="sabor"
            value="svelt"
            onChange={handleChange}
          />
          <label htmlFor="svelt">Svelt</label>
          <p>Elige tu lenguaje de programacion favorito</p>
          <select 
            name="lenguaje" 
            onChange={handleChange}
            defaultValue=""
          >
            <option value="">----</option>
            <option value="js">JavaScript</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
            <option value="go">GO</option>
            <option value="rb">Ruby</option>
          </select>
          <br />
          <label htmlFor="terminos">Acepto términos y condiciones</label>
          <input 
            type="checkbox" 
            id="terminos" 
            name="terminos"
            onChange={handleChecked}
          />

      </form>
    </Fragment>
  );
};

/* export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulariose ha enviado");
  };
  return(
    <Fragment>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
        />
          <p>Elige tu sabr JS Favorito:</p>
          <input 
            type="radio"
            id=""
            name="sabor"
            value=""
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor="vanilla">Vanilla </label>
          <input 
            type="radio"
            id="React"
            name="sabor"
            value="React"
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor="React">React </label>
          <input 
            type="radio"
            id="Angular"
            name="sabor"
            value="angular"
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor="angular">Angular </label>
          <input 
            type="radio"
            id="vue"
            name="sabor"
            value="vue"
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor="vue">Vue </label>
          <input 
            type="radio"
            id="svelt"
            name="sabor"
            value="svelt"
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor="svelt">Svelt</label>
          <p>Elige tu lenguaje de programacion favorito</p>
          <select 
            name="lenguaje" 
            onChange={(e) => setLenguaje(e.target.value)}
            defaultValue=""
          >
            <option value="">----</option>
            <option value="js">JavaScript</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
            <option value="go">GO</option>
            <option value="rb">Ruby</option>
          </select>
          <br />
          <label htmlFor="terminos">Acepto términos y condiciones</label>
          <input 
            type="checkbox" 
            id="terminos" 
            name="terminos"
            onChange={(e) => setTerminos(e.target.checked)}
          />

      </form>
    </Fragment>
  );
}; */