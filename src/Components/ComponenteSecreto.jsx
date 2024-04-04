import React from 'react';

function ComponenteSecreto({ autorizado }) {
  if (!autorizado) {
    return null; 
  }

  return (
    <div className='grid justify-center p-5 m-5 border-4 border-black w-[200px] '>
      <h1>¡Componente Secreto!</h1>
      <p>Este es un contenido secreto que solo se muestra si estás autorizado.</p>
    </div>
  );
}

export default ComponenteSecreto;
