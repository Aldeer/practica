import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
  const [scroll, setScroll] = useState(0);
  
  
  useEffect(() => {
    /* console.log("moviendo el scroll"); */
    const detectarScroll = () => setScroll(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    }
  }, [scroll]);

  useEffect(() => {
    /* console.log("fase de montaje"); */
  }, []);

  useEffect(() => {
    /* console.log("fase de actualizacion"); */
  });

  useEffect(() => {

    return () => {
      /* console.log("fase de desmontaje"); */
    };
  });
  
  return(
    <>
      <h2>Hooks - useEffect y el cilco de vida</h2>
      <p>Scroll Y del Navegador {scroll}px</p>
    </>
  );
};