import React, { useState } from 'react';

function BotonToggle() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const toggleMensaje = () => {
    setMostrarMensaje(!mostrarMensaje); 
  };

  return (
    <div className='p-4 m-5 border-black border-4 w-[200px] bg-black'>
      <button className=' border-black border-4 text-black bg-white' onClick={toggleMensaje}>Mostrar/Ocultar Mensaje</button>
      {mostrarMensaje && <p className='p-5 text-white font-bold'>¡Este es el mensaje específico que se muestra u oculta con el botón!</p>}
    </div>
  );
}

export default BotonToggle;
