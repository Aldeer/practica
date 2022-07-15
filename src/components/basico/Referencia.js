import React, { useRef } from 'react';
import { Fragment } from 'react';

export default function Referencias() {
  let refMenu = useRef(), 
   refMenuBtn = useRef();

  //console.log(refMenu, refMenuBtn);
  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    };
    /* const $menu = document.getElementById("menu");
    if(e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";
    } */ 
  };

  return(
    <Fragment>
      <h2>Referencias</h2>
      <button 
        className='btn btn-primary'
        ref={refMenuBtn} 
        onClick={handleToggleMenu}>Menú</button>
      <nav  ref={refMenu} style={{display:"none"}}>
        <br />
        <a href="/">Seccion 1</a>
        <hr />
        <a href="/">Seccion 2</a>
        <hr />
        <a href="/">Seccion 3</a>
        <hr />
        <a href="/">Seccion 4</a>
        <hr />
        <a href="/">Seccion 5</a>
      </nav>
    </Fragment>
  );
};